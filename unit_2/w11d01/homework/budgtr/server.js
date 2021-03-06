const express = require('express');
const app = express();
const PORT = 4000;
const budget = require('./models/budget.js');


// Middleware
// Tell our server to use express react views as the view engine

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//look in a directory called public when you see a .js file or a .css file
app.use(express.static('public'));
// parse data from url encoded form request, req.body = data from the form
app.use(express.urlencoded({extended: false}));


//RESTFUL ROUTES
//Controllers


//Index
app.get('/budget', (req, res)=> {
    res.render('Index', {
        budget: budget
    })
});

//New 
app.get('/new', (req, res)=> {
    res.render('New')
});


//Create 
app.post('/budget', (req, res)=> {
    //update model with new budget item
    budget.push(req.body);
    res.redirect('/budget');
})

//Show
app.get('/budget/:indexOfBudgetItems', (req, res)=> {
    res.render('Show', {
        budget: budget[req.params.indexOfBudgetItems]
    })
});







app.listen(PORT, ()=>{
    console.log('listening on PORT ' + PORT)
})