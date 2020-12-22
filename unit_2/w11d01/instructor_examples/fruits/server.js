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

// RESTFUL ROUTES
// Controllers
// Index
app.get("/fruits", (req, res) => {
    // res.send(fruits);
    res.render("Index", {
        fruits: fruits
    })
});

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