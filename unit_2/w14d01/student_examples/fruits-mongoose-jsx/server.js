//Import Needed Modules
require('dotenv').config(); // process.env
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const Fruit = require('./models/fruit.js')


//Body Parser Middleware to give us access to req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next)=> {
    console.log(req.body)
    next()
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()) //Gives us back a function that is able to parse the view files.


//Connect to MongoDB with mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, //Opting in to the new features MongoDB has
    useCreateIndex: true, //Opting in to the new features MongoDB has
    useUnifiedTopology: true //Opting in to the new features MongoDB has
})

mongoose.connection.once('connected', ()=> console.log('Mongoose is all ready'));
//Checking to see if mongoose is able to connect us to MongoDB



// CREATE
/*New Route*/
app.get('/fruits/new', (req, res)=> {
    res.render('New') //You can only put res.something on the last function
})

/*Create Route*/
app.post('/fruits', (req, res)=> {
    req.body.readyToEat === 'on'?
    req.body.readyToEat = true :
    req.body.readyToEat = false;
    Fruit.create(req.body, (failure, success)=> {
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
//READ

/*Index*/
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

/*Show*/
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
    console.log('listening on PORT ' + PORT)
})
