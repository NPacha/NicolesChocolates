[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

<hr>
Title: Rails Controllers<br>
Type: Lesson<br>
Creator: Thom Page<br>
Topics: Rails controllers and routing<br>
<hr>

# RAILS CONTROLLERS

### Lesson Objectives
_After this lesson, students will be able to:_

- Review setting up a Rails project
- Review generating and running migrations
- Use the Faker gem to seed data
- Configure RESTFul routes with the Rails router
- Explain what `rails routes` returns
- Write controller methods for _index_ and _show_

<br>
<hr>

### Setup

**We are going to make an app called `songs_app_api`.**

This will be a single-model app that serves json data for songs.

* Initialize an app called `songs_app_api`

```bash
rails new songs_app_api --api --skip-git -d postgresql 
```

* Change into the new directory: 

```bash
cd songs_app_api
```

**Start the server:** 

* Run `rails s` to start the server on port 3000 
* Go to [localhost:3000](http://localhost:3000) in the browser.

We should all get an error in the browser.

```bash
FATAL: database \"____________\" does not exist
```

JSON response:

![](https://i.imgur.com/Ru5nXsI.png)


[To format JSON nicely, use JSON Formatter Chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)


* Quit the server: `ctrl + c`

* Create the database: `rails db:create`

* Run the server again: `rails s`. We should see this:


<img src="https://i.imgur.com/8hhBtp8.png" width=400>

<hr>

## Make a Song model

> Our app will serve a JSON catalog of songs

Generate the migration for the songs table: 

```ruby
rails g migration CreateSongs
```

In the migration file, the song table should have columns for title, artist_name, and artwork (all strings):

```ruby
class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist_name
      t.string :artwork
    end
  end
end
```

<img src="https://i.imgur.com/Mzz6Lfo.png" width=400>

<br>
<br>

* Run the migration: `rails db:migrate`

* Check `schema.rb` and confrim it's been updated

* Create the model file: `app/models/song.rb`

* Add in the Song class

```ruby
class Song < ApplicationRecord

end
```

<img src="https://i.imgur.com/WYWFOVZ.png" width=300>

<br>
<hr>

## SEED

#### Install Faker
We will seed a little differently this time using a gem called `Faker` to give us a bunch of random results. With `Faker` we won't have to invent any seed data.

* Add `gem faker` to the Gemfile. (It can go anywhere but let's put it around line 15/16)


<img src="https://i.imgur.com/0P8Z3eB.png" width=500>

* Run `bundle` to install all your gems

<img src="https://i.imgur.com/ZLvXOOc.png" width=500>


#### Use Faker

In `seeds.rb` let's write some Ruby to use the Faker gem in a loop:

```ruby
10.times do
  Song.create(
    title: Faker::Hipster.sentence(word_count: 3),
    artist_name: Faker::Team.name,
    artwork: Faker::Placeholdit.image(size: "50x50")
  )
end
```

![](https://i.imgur.com/igRXhsc.png)

> [Faker documentation](https://github.com/stympy/faker)

> [Placeholdit documentation](https://placeholder.com/)

> [What is the double colon :: ](http://stackoverflow.com/questions/3009477/what-is-rubys-double-colon)

* Run the seed file: `rails db:seed`

* Check in rails console `rails c`:

```ruby
Song.all
```

Output should look similar to the following:


<img src="https://i.imgur.com/oRZePW1.png" width=500>

<br>
<br>

**Side Note**

The default format output isn't the easiest to read.  There are several gems that provide better formatting, one of which is [Hirb](https://github.com/cldwalker/hirb).

Let's install and get this formatting working:

- Add gem 'hirb' to our Gemfile
- Run `bundle install` to install the gem
- Now run `rails c`
- In the console type: `require 'hirb'`
- In the console type: `Hirb.enable`

If you've configured the `Hirb` console formatter to load with each instance of the rails console then also make sure to import it as a gem in the `Gemfile` and then run `bundle`.  The output should look similar to the following:

```ruby
irb(main):001:0> Song.all
  Song Load (0.6ms)  SELECT "songs".* FROM "songs"
+----+----------------------+---------------------+---------------------+
| id | title                | artist_name         | artwork             |
+----+----------------------+---------------------+---------------------+
| 1  | Locavore neutra a... | Minnesota crows     | https://placehol... |
| 2  | Listicle church-k... | Texas kangaroos     | https://placehol... |
| 3  | Pork belly helvet... | Louisiana nemesis   | https://placehol... |
| 4  | Artisan hella way... | Utah oxen           | https://placehol... |
| 5  | Gentrify pbr&b 3 ... | South Dakota pen... | https://placehol... |
| 6  | Semiotics bushwic... | Missouri cattle     | https://placehol... |
| 7  | Helvetica squid s... | New Mexico oxen     | https://placehol... |
| 8  | Leggings green ju... | Maryland ants       | https://placehol... |
| 9  | Try-hard sartoria... | New Jersey pigs     | https://placehol... |
| 10 | Sriracha church-k... | Oregon penguins     | https://placehol... |
+----+----------------------+---------------------+---------------------+
```

<hr>


## ROUTES

#### Establish the routes

Routing works differently in Rails than in Node/Express. There is a separate file that will provide a **convention** for our routes. As we keep emphasizing rails is about **convention** over **configuration**.

Rails, by default, has already created a series of routes which we can view in the rails console by typing:

```sh
rails routes
```

You will see output similar to:

<img src='https://i.imgur.com/aYdyLJy.png' width=800>

These routes however aren't related in anyway to our Song data so let's configure those routes.

Rails routes are always configured in the `routes.rb` file so:

* Open `config/routes.rb`


Rails provides the `resources` keyword which will create the five JSON RESTFul routes for whatever route we specify.

```ruby
Rails.application.routes.draw do
  resources :songs
end
```



Run `rails routes` once again and this will show the  five JSON RESTFul routes that have been created:

```bash
$ rails routes
Prefix Verb   URI Pattern          Controller#Action
 songs GET    /songs(.:format)     songs#index
       POST   /songs(.:format)     songs#create
  song GET    /songs/:id(.:format) songs#show
       PATCH  /songs/:id(.:format) songs#update
       PUT    /songs/:id(.:format) songs#update
       DELETE /songs/:id(.:format) songs#destroy
```


## RAILS ROUTES: What is this stuff?

**Let's look at the first line**

The `Prefix` shows that the API can deliver up all songs or just a single song. 

Verb is `GET` and URI Pattern is `/songs`, so we can assume we have a GET route for songs.

The `Controller#Action` for `GET` is `songs#index`. This means that for this route, we will call a method called `index` within the controller (coming soon) which will handle all requests to `GET /songs`.

So, for our index route, there will will be uri `/songs` (that has no params or anything) according to the usual RESTFul conventions.

`.:format` is something Rails adds to handle additional formatting types but since we won't be doing any of that we can ignore it.  If you want to know more about it read this [explanation of .:format](https://stackoverflow.com/a/20320286) 

**Let's look at the other lines**

As for the others, they are the same pattern we have seen for RESTFul routing of create, show, update, and destroy routes.

For **show, update, and destroy**, Rails tells us that the first param will be called `:id`. We don't have a choice what it will be called. But at least `rails routes` tells us what is expected.

[Rails routes docs](http://api.rubyonrails.org/classes/ActionDispatch/Routing.html)

Although our routes are in place they don't yet have the support they need to respond to any requests.  As a matter of fact if we try to access the `/songs` route we should get the following error:

<img src="https://i.imgur.com/l3Y9zKZ.png" width=500>

Rails takes `convention` to heart and is looking for a file called `songs_controller`, which hasn't yet been created. 


<hr>

## CONTROLLERS

### Make a controller file

Once again Rails is all about **convention over configuration**

Rails is expecting your controller file to conform to its convention. The convention is model-name **plural_controller**.

Go into the `app/controllers` folder and create the file.

`app/controllers/songs_controller.rb`

![](https://i.imgur.com/KBoqaRR.png)

Now try to access the `/songs` route and the Rails will guide you as to what needs to be done next. 

<img src="https://i.imgur.com/LTvnF5z.png" width=600>

### Make the controller class


Create the `SongsController` class and inherit from `ApplicationController`

```ruby
class SongsController < ApplicationController
end
```

With our `songs_controller` in place let's test the `/songs` route once more.  Once again Rails is guiding you as to what needs to be done next. 

<img src="https://i.imgur.com/WxBT4Tl.png" width=400>

If you recall when running `rails routes` there is an `#Action` associated with `/songs`.  

```ruby
Prefix Verb   URI Pattern          Controller#Action
 songs GET    /songs(.:format)     songs#index
```

That action is a method which doesn't yet exist and needs to be created. 


## &#x1F449; INDEX

Add the following method in `songs_controller.rb`


```ruby
def index
end
```

This is the same business like when we did this in Express for our index route:

```javascript
router.get('/songs', function(req, res) {

});
```

It's much shorter in Rails.

### `render()` method

To render JSON we use the `render` method and pass it a hash: `render json: some_value`

```ruby
  def index
    render json: "hi"
  end
```

The render method takes a hash. To make it more visual when representing the hash, you could write it this way:


```ruby
  def index
    render({ :json => "hi" })
  end
```

Check it out in the browser.

### Song Data

To get our songs data, we could just write raw SQL into the controller and use ActiveRecord to run the query:


```ruby
def index
  query_string = "SELECT * FROM songs;"
  results = ActiveRecord::Base.connection.execute(query_string)
  render json: results
end
```

_But_ what we want is to use the convenient Ruby shorthand provided by ActiveRecord: `Song.all`. The same queries we have been using in rails console.

Putting it together:

```ruby
class SongsController < ApplicationController

  def index
	render json: Song.all
  end

end
```

Let's go to that route in the browser.

```
localhost:3000/songs
```

If all goes according to plan, we have successfully established our API:


<img src="https://i.imgur.com/7OXzwcU.png" width=500>

### Status Codes

If we are going to deliver our API to a front end developer then we should provide a **status code** which they can use to query and make sure that the request has been successful. 

Change the code to deliver a `200` status code:

```ruby
  def index
    songs = Song.all
    render json: {status: 200, songs: songs}
  end
```

[200 Status Code](https://httpstatuses.com/200)

[HTTP Status Codes](https://httpstatuses.com/)

Visit the index route in the browser and you should see the JSON include the status code.

<img src="https://i.imgur.com/ACQJesF.png" width=500>

<hr>

## &#x1F449; SHOW

Looking at `rails routes`, what method do we use for a _show_ route?

Show routes always come with an id attached -- The purpose of a show route it to display one of a given resource, which we get by id.

Looking at `rails routes`, the param will be called `:id`. This is just the first param in the uri. Rails has gone ahead and just named the first param `:id`.

In Express, we got the id through `req.params.id`

In Rails, The URL params are stored in a globally existing **hash** called `params`. We can access params inside the params hash like so:

```ruby
params[:id]
```

Let create the `show` method and add `puts params` to the show route:

```ruby
  def show
      puts "show route: params #{params}"
  end
```

Now make a request for the following song:

```
localhost:3000/songs/1
```

In the rails console you should see:

```ruby
Started GET "/songs/1" for ::1 at 2020-08-03 07:12:33 -0400
Processing by SongsController#show as HTML
  Parameters: {"id"=>"1"}
show route: params {"controller"=>"songs", "action"=>"show", "id"=>"1"}
```

Now lets return the song based on that id.

```ruby
  def show
    puts "show route: params #{params}"
    render json: Song.find(params[:id])
  end
```

### Status Code

Include the status code, `200 OK` and wrap it all up in an object and since we no longer need to puts the info the console we can remove the puts statement

```ruby
  def show
    song = Song.find(params[:id])
    render json: {status: 200, song: song}
  end
```

In the browser you should see:

![](https://i.imgur.com/hgu8B1p.png)



<br>
<hr>

