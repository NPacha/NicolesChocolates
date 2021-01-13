//Import Needed Modules
require('dotenv').config();//this processes the .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express(); //create an instance of express
const PORT = 3000;

//Set up the body parser Middleware that allows us access to the req.body
app.use(express.urlencoded({extended: true})); //parses forms
app.use(express.json()); //parses raw json data
app.use((req,res, next)=> {
    console.log(req.body)
    next()
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()) //Gives us back a function that is able to parse the view files

//Connect to MongoDB with mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


//Check to see if mongoose is able to connect us to MongoDB
mongoose.connection.once('connected', ()=> console.log('Mongoose is ready'));

//CRUD Restful Routes

//CREATE


//READ
/*Index*/
app.get('/NicolesChocolates', (req, res)=> {
    res.send('Welcome to Nicoles Chocolate Store')
})

app.get('/NicolesChocolates/:id', (req, res)=> {
    res.send('Dark Chocolate with Chili')
})


//UPDATE


//DELETE



app.listen(PORT, ()=>{
    console.log('We in the house at ' + PORT)
})