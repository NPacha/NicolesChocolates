const express = require('express');
const app = express();
const PORT = 3000;

// Models
const fruits = require("./models/fruits.js");

// Middleware
// Tell our server to use express react views as the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// look in a directory called public when you see a .js file or a .css file
app.use(express.static("public"));
// parse data from url encoded form request, req.body = data from the form
app.use(express.urlencoded({extended: false}));

// RESTFUL ROUTES
// Controllers

// Index
app.get("/fruits", (req, res) => {
    // res.send(fruits);
    res.render("Index", {
        fruits: fruits
    })
});

//NEW
app.get('/fruits/new', (req, res)=> {
    res.render('New')
});

//Create
app.post('/fruits', (req, res)=> {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat= false;
    }
    //update model with this new fruit
    fruits.push(req.body);
    res.redirect('/fruits');
})


// Show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // console.log(req.params)
    // res.send(fruits[req.params.indexOfFruitsArray]);
    res.render("Show", {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
});

// listen on port
app.listen(PORT, () => {
    console.log("listening on " + PORT);
})