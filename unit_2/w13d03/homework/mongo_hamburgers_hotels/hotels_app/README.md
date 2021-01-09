![](https://git.generalassemb.ly/Web-Development-Immersive-Remote/WDIR-Outrun/blob/master/ga_cog.png)

---
Title: Boutique Travel Travel Boutique<br>
Type: Homework<br>
Duration: 2 + hours (2+ hours for Mongo Burgers) <br>
Creator: Karolin Rafalski <br>
Course: WDIR-Space Ghost<br>

---

# Boutique Travel Travel Boutique

You are now starting a [boutique travel travel boutique](http://pushing-daisies.wikia.com/wiki/Boutique_Travel_Travel_Boutique). Your choice in the hotels you will work with will be very small. To help give your database some structure, you'll be using the npm module mongoose.

## Resources
> [Mongoose Documentation](http://mongoosejs.com/docs/guide.html)

> [Mongo Documentation - CRUD](https://docs.mongodb.com/manual/crud/)

> [Mongo Cheatsheet](../Mongo_Cheatsheet.md)


## Activity

### Set up

**Inside this folder**
![](https://www.dropbox.com/s/pwrl4scgmtqixzu/Screen%20Shot%202021-01-09%20at%205.57.38%20PM.png?dl=1)

![](https://www.dropbox.com/s/v9osaazrq7s00et/Screen%20Shot%202021-01-09%20at%205.58.29%20PM.png?dl=1)

```js
require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const Schema = mongoose.Schema;


const articleSchema = new Schema({
	title:  { type: String, required: true, unique: true }, //can say whether we want properties to be required or unique
	author: { type: String, required: true },
	body:   String,
	comments: [{ body: String, commentDate: Date }], // can have arrays of objects with specific properties
	publishDate: { type: Date, default: Date.now }, // can set defaults for properties
	hidden: Boolean,
	meta: { // can have properties that are objects
		votes: Number,
		favs:  Number
	}
}, {timestamps: true});

const Article = mongoose.model('Article', articleSchema);


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})

mongoose.connection.once('connected', ()=> {
    console.log('Mongo connected the world is yours')
})

// CRUD --- Create, Read, Update, Destroy
// REST --- Representational State Transfer
// INDUCES ------
// INDEX ----- READ
app.get('/articles', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        if(!err){
            res
              .status(200)
              .json(foundArticles);
        } else {
            res
              .status(400)
              .json(err)
        }
    })
})



// NEW -------- shows a form so the user can do the create function

// DELete
app.delete('/articles/:id', (req, res) => {
	Article.findByIdAndDelete(req.params.id, (err, foundArticle) =>{
		if(!err){
			res
				.status(200)
				.json(foundArticle)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})



// Update
app.put('/articles/:id', (req, res) => {
	Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArticle) =>{
		if(!err){
			res
				.status(200)
				.json(updatedArticle)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})


// CREATE

app.post('/articles', (req, res) => {
		console.log(req.body)
    Article.create(req.body, (err, createdArticle) => {
        if(!err){
					res
						.status(200)
						.json(createdArticle)
				} else {
					res
						.status(400)
						.json(err)
				}
    })
})


// EDIT ----------- show a form so users can do the update functionality


// SHOW

app.get('/articles/:id', (req, res) => {
	Article.findById(req.params.id, (err, foundArticle) =>{
		if(!err){
			res
				.status(200)
				.json(foundArticle)
		} else {
			res
				.status(400)
				.json(err)
		}
  })
})



app.listen(PORT, () => console.log('we in the building at ' + PORT))

```

<hr>

## SET UP A HOTEL SCHEMA

- set up the hotel schema
- name type string, required true, unique true
- location type string
- rating type number, max value 5
- vacancies type boolean
- tags type array
- within the array type string
- rooms


### Using Mongoose to CRUD our data

#### With each prompt, complete it, then comment it out - write all your code inside `app.js`
[Mongo Documentation](https://docs.mongodb.com/manual/crud/)

### C

- Create a hotel using the above schema, Do it 13 Times
  - There should now be 13 hotels in the database.

### R
- with each prompt, complete it, then comment it out
  - let's find all our hotels with our Index Route
  - Find 1 hotel with the show route

### D
- Build the delete route
- choose 1 hotel and delete it
- Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well
- The hotel in the `Colorado Rockies` has been closed for undisclosed reasons. Delete this hotel too

### U
- Build the Update Route
- The Great Northern's rating is only a 3! Update that to be a 5
- Motel Bambi is now fully booked, change the vacancies to false
- Things are on the decline for the Motel in `'White Bay, Oregon'`, change the rating to 2

## Hungry For Even More
- Use JSX to make views of your data
