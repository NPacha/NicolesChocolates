[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)


---

Title: Science App - one to many <br>
Type: Lesson <br>
Duration: 1.5 hrs <br>
Creator: Thom Page <br>
Topics: Rails 5 API, One-to-many relationships<br>

---

# &#x1F52D; &#x1F4D0; ONE TO MANY - Science App &#x1F914; &#x1F4A1; &#x1F4A1; &#x1F4A1;

Lets build a relationship between models.

We are going to make an app to visualize data for **temperatures** that _belong to_ **locations**.

Each **location** will _have many_ **temperatures**

---
### Lesson objectives:

* scaffold two independent models
* set up a one-to-many relationship between the models
* use nested routes 
* design the api endpoints

---

# Final API Data Set

The API will deliver data on 2 urls and create an association where one ore more temperatures is associated with a single location.  

- locations
- temperatures

Here is a deployed version of the API: [https://seir526-rails-temp-app.herokuapp.com/locations](https://seir526-rails-temp-app.herokuapp.com/locations)

Location data will include all temperatures associated with that location and will look like the following:

<img src="https://i.imgur.com/fEWn9WL.png" width=400/>

Temperature data will use a foreign key to build the association with a location and will look like the following:

<img src="https://i.imgur.com/HGAQVso.png" width=400/>



# SETUP

Create the top-level directory that will house both our rails api and the frontend.

![](https://i.imgur.com/4UaEhHG.png)

The app will have a **one-to-many** relationship between Locations and Temperatures. For each location we can log changes in the climate.

Create the Rails API:

```bash
$ rails new temperatures_app_api --api -d postgresql --skip-git
```

`cd temperatures_app_api` into the Rails directory and create the database


```bash
$ rails db:create
```

<br>
<hr>


# Generate App

### Scaffolding

> “Scaffolding is a temporary structure used to support a work crew to aid in the construction, maintenance and repair of buildings, bridges and all other man-made structures.” – Wikipedia

**Translated Into Rails**

A scaffold is a set of automatically generated files which forms the basic structure of a Rails project.

Rails is so developer friendly that it even has a command to help scaffold an app with following:

- Controller
- Model
- A Migration 
- Routes
- Views for every standard controller action (index, edit, show, new)

Let's scaffold  **Locations** with `lat` and `lng` as decimals, and also a `name` column.

```bash
$ rails g scaffold location lat:decimal lng:decimal name
```

This has added boilerplate files and code to

* `db/migrate`
* `app/models`
* `config/routes.rb`
* `app/controllers`

Let's take a look at what this had added:

**Routes**

All CRUD based routes have been created via the `resources` keyword

```ruby
Rails.application.routes.draw do
  resources :temperatures
end
```
We can also verify the routes using `rails routes`

<img src="https://i.imgur.com/qOg63rX.png" width=500 />

<br>
<br>

**Controllers**

Here is our `locations_controller.rb` file. 

<details>
<summary>View Full Code</summary>

<br>

```ruby
class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :update, :destroy]

  # GET /locations
  def index
    @locations = Location.all

    render json: @locations
  end

  # GET /locations/1
  def show
    render json: @location
  end

  # POST /locations
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1
  def destroy
    @location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_params
      params.require(:location).permit(:lat, :lng, :name)
    end
end
```

</details>

<br>

**Models and Migrations**

And of course the **location** model and **migration** file:

```ruby
class Location < ApplicationRecord
end

```

```ruby
class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.decimal :lat
      t.decimal :lng
      t.string :name

      t.timestamps
    end
  end
end
```

Could it have been any easier to spin up a server with all those configs?  Answer to that is clearly no. 


Now we will need to scaffold **Temperatures** with `average_high_f`
and `average_low_f` as integers

```bash
$ rails g scaffold temperature average_high_f:integer average_low_f:integer
```

We have two fully-formed but independent resources: Locations and Temperatures. What we need to do next is **relate** them together.
<br>
<hr>

# Add foreign key

**One-to-many relationship**

Let's generate a migration to add the foreign key for our **one-to-many** relationship.  But before we do let's think about this for a minute.

If **Locations** have many **Temperatures**, and a **Temperature** belongs to a **Location** ...

<details>
<summary>Question: Which model should have the foreign key?</summary>
<br>
Answer: The foreign key always goes in the many. In this case there will be many temperatures. Each temperature will reference its single location via its foreign key.

<br>
<br>
In this case we will add a foreign key to temperatures
</details>

<br>

Create the new migration file which will be used to add a foreign key to the temperatures table.

```ruby
rails g migration AddForeignKeyToTemperatures
```

Inside the migration we want to **add a column** for the foreign key:

![](https://i.imgur.com/7vMizUm.png)

We have three migrations pending, let's run them and generate our schema:

![](https://i.imgur.com/Dobz8xA.png)

### Schema

If we take a look at the `schema.rb` file we will see the following:

![](https://i.imgur.com/dpVEaCI.png)

<br>
<hr>

# ActiveRecord Relations

Last piece that of the puzzle that defines the relationship is adding `has_many` and `belongs_to` in the corresponding models.

**models/location.rb**

![](https://i.imgur.com/7DkIqsS.png)

**models/temperature.rb**

![](https://i.imgur.com/uEvVl9y.png)

Note Rails's plural / singular conventions.

<br>
<hr>

# Seed data

Add the following data to **seeds.rb**

```
Location.create([
  { lat: 40.7128, lng: 74.0059, name: 'New York City' },
  { lat: 78.2232, lng: 15.6267, name: 'LongYearByen' }
])

Temperature.create([
  { average_high_f: 39, average_low_f: 26, location_id: 1 },
  { average_high_f: 50, average_low_f: 40, location_id: 1 },
  { average_high_f: 80, average_low_f: 35, location_id: 1 },
  { average_high_f: 60, average_low_f: 44, location_id: 1 },
  { average_high_f: 71, average_low_f: 55, location_id: 1 },
  { average_high_f: 90, average_low_f: 55, location_id: 1 },
  { average_high_f: 30, average_low_f: 55, location_id: 1 },
  { average_high_f: 1, average_low_f: -20, location_id: 2 }
])
```

And then seed the database.
```bash
$ rails db:seed
```

The data should look like this:

**Locations table:**
![](https://i.imgur.com/iPDwBBA.png)

**Temperatures table:**
![](https://i.imgur.com/ZHZGdbq.png)

<br>
<hr>

Confirm that the data has been added by spinning up the server and hitting the following routes:

- http://localhost:3000/locations
- http://localhost:3000/temperatures

Or using the rails console we can not only return the locations but also the associated temperatures and vice versa.

Active Record: see all temperatures belonging to a location

```ruby
Location.find(1).temperatures
```



Active Record: see a temperature's associated location

```ruby
Temperature.find(1).location
```

<hr>


# &#x21A9; &#x1F690; &#x1F69B; ROUTES &#x1F6E3; &#x1F500; &#x21AA;

## Design considerations

What do you want your API to do?  Let's add some user stories for how they will interact with location data.

**Locations**

* User should not be able to add or edit locations.

* User should be able to view a list of locations and information for each location.

Based on the user stories the only routes we need for Locations are **index** and **show**. 

In Express, this was easy and you would  just write them in and nothing more. In Rails, there is a procedure.

`config/routes.rb`

#### Limit location routes _only_ to index and show

We can limit the available routes using the **only:** keyword and and array of the routes that will be made available. 

![](https://i.imgur.com/9S1AqeH.png)

**Temperatures**

Let's add some user stories for how they will interact with temperature data.

* User should be able to view  temperature records associated with a location.

* User should be able to add temperature data for a given location.

All we need are **index** and **create** for Temperatures.

#### Limit temperature routes _only_ to index and create

![](https://i.imgur.com/2IKEv6T.png)

Confirm this has been configued via `rails routes`

![](https://i.imgur.com/Y6rtmGY.png)

<hr>

# CONTROLLER ACTIONS

## Locations controller

So we have only an **index** and a **show** route for Locations. 


**Note:** We will be using the `before_action` filter.  `before_action` is a callback that is performed before an action is executed and can be used to halt the request cycle. Common use cases for using `before_action` might be:

- confirm user is logged in
- checking for permissions to resource

<details>
<summary>Question: How is before_action currently being used here?</summary>

<br>
In our current configuration we are using it to run the private set_location method which confirms the location for a specific id exists. 

</details>

<br>

Let's edit the LocationsController to implement the requirements in the user stories.  Here we will remove everything except the boilerplate **private** `set_location` method, and edit the `before_action` call just to have `[:show]`


 <img src="https://i.imgur.com/zhBsWwz.png" width=500>

Run the server with `rails s` and check out the index and show routes for locations in the browser.

<details>
<summary>All Locations: http://localhost:3000/locations </summary>

<img src="https://i.imgur.com/ZcrP4i1.png" width=400/>
<br>

</details>

<details>
<summary>One Location: http://localhost:3000/locations/1</summary>


<img src="https://i.imgur.com/vfyjaM8.png" width=400 />
<br>

</details>

<br>

Try the same for `Temperatures` and confirm what those routes return. (one of them doesn't work...why?)

## Locations with related temperatures

### Locations show

Currently, our locations routes deliver data for locations, but there is no temperature data included.

Why not have our Locations show route also deliver the Temperatures for that location? It would be convenient for a front-end developer to query:

```
locations/1
```

And receive json for the location that includes the temperatures for that location. We can choose what that data will look like, and we have some options.

![](https://i.imgur.com/TeyA6hx.png)

The frontend developer would get the following:



 <img src="https://i.imgur.com/PfH0mbt.png" width=500>

Since we already know the location based on the id wouldn't it be better if our JSON looked like this instead:



 <img src="https://i.imgur.com/Vb5Xs6E.png" width=500>


We can format our data this way with the `.to_json` method that takes a hash as an argument that we can use to `include` the temperatures.

```ruby
render json: @location.to_json(include: :temperatures)
```



 <img src="https://i.imgur.com/A5d3Bf4.png" width=500>



### Locations index

We can do the same for our Locations index if we want:

![](https://i.imgur.com/Jw4nmKk.png)

We get an array of locations, each with related temperatures data.

<hr>

## Temperatures controller

We have an **index** and a **create** in our routes. Let's remove everything else. Remove the `before_action` call and the `set_temperature` method too since we won't be needing them.


 <img src="https://i.imgur.com/JVoAF85.png" width=500>


## Temperatures create

Before we enable create lets try and answer the following questions:  

* Do we want a Temperature to exist without belonging to a Location?

* At which point do we associate a Temperature with a Location?

* Where would the Location even come from?

**Do we want a Temperature to exist without belonging to a Location?**

No. We want the location to exist and to be provided via a param in the url. The user will decide which location when they make the request to the server.

A hypothetical request from the client-side would look like:

```javascript
axios({
	method: 'POST',
	url: 'http://server/locations/1/temperatures',
	data: formdata
})
```

The user wants a temperature added for location `1`.

In express this location id would come in as `req.params.id`.

How do we get it in rails? There is no params in rails routes for our temperatures#create action. 

Well in rails we can nest routes so let's take a look at them.

### Nested routes

We will want to **nest** our create action inside the `locations` routes.  

```ruby
Rails.application.routes.draw do
  resources :temperatures, only: [:index]
  resources :locations, only: [:index, :show] do
    resources :temperatures, only: [:create]
  end
end
```

When we `rails routes`, we will get this:

```bash
               Prefix Verb URI Pattern                                    Controller#Action
         temperatures GET  /temperatures(.:format)                        temperatures#index
location_temperatures POST /locations/:location_id/temperatures(.:format) temperatures#create
            locations GET  /locations(.:format)                           locations#index
             location GET  /locations/:id(.:format)                       locations#show
```

Our create action URI has changed to reflect that we are creating a Temperature only in relation to a Location. The param we received is **location_id**

We will want to add the incoming `location_id` to our new temperature record:

```ruby
@temperature.location_id = params[:location_id]
```

Create a new Temperature using `temperature_params` and on the new temperature, set the id column to the location_id from the url


 <img src="https://i.imgur.com/0LhS7m4.png" width=500>

<!-- 
Also remove `location: @temperature`, it's a pain that will try to force a redirect and will give us errors in Postman if it stays.

![](https://i.imgur.com/KYTWXYR.png)
<br> -->

### TEST CREATE ROUTE WITH POSTMAN



 Add a new temperature record for location 2.

 `POST http://localhost:3000/locations/2/temperatures`

 Succesful Postman request:


 <img src="https://i.imgur.com/h1j6Rlg.png" width=500>
 
 Note that the temperature was saved with a `location_id` as intended.

**Location 2 in the browser has the new temperature:**

<img src="https://i.imgur.com/HNtmSWz.png" width=500>


**Temperatures index in the browser has the new temperature:**

<img src="https://i.imgur.com/qt0d7p0.png" width=500>

### under the hood: params hash again


![](https://i.imgur.com/sKDIr4N.png)

This is like the `request object` in Express.

Our `req.body` is within `temperature`, and our `req.params` is within `location_id`. That's just the way Rails formats it. Body and params go into the **params** hash.

<br>

### Resources

- [rails-scaffolding](https://www.rubyguides.com/2020/03/rails-scaffolding/)
