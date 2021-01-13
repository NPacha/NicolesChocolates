// Import Needed Modules 
require('dotenv').config(); // process.env
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const Fruit = require('./models/fruit');

// Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({extended: true})); // form data
app.use(express.json()); // raw json data
app.use((req, res, next)=>{
 console.log(req.body)
 next();
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.once('connected', () => console.log('Mongoose is all ready'));

// CREATE
/* New Route */
app.get('/fruits/new', (req, res, next)=> {
 console.log('ran on new');
 next()
},
(req, res) => {
    res.render('New')
})
/* Create Route */
app.post('/fruits', (req, res) => {
    req.body.readyToEat === 'on'?
    req.body.readyToEat = true:
    req.body.readyToEat = false;
    Fruit.create(req.body, (failure, success) => {
        if(!failure){
            res
              .status(200)
              .send(success)
        } else {
            res
              .status(400)
              .send(failure)
        }
    })
})

// READ

/* Index */
app.get('/fruits', (req, res) => {
    Fruit.find({}, (err, foundFruits) => {
        if(!err){
            console.log(foundFruits)
            res
              .status(200)
              .render('Index', { fruits: foundFruits })
        } else {
            res
              .status(400)
              .send(err)
        }
    })
})

/* Show */

app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if(!err){
            res
              .status(200)
              .render('Show', {
                  fruit: foundFruit
              })
        } else {
            res 
              .status(400)
              .send(err)
        }
    })
})





app.listen(PORT, () => {
    console.log('listening on port: ' + PORT)
})
