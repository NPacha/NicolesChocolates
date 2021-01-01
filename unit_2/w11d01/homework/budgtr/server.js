const express = require('express');
const app = express();
const PORT = 3000;

const budget = require('./models/budget.js');

// Middleware
// Tell our server to use express react views as the view engine

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//look in a directory called public when you see a .js file or a .css file
app.use(express.static('public'));


//RESTFUL ROUTES
//Controllers


//Index
app.get('/', (req, res)=> {
    res.render('Index', {
        budget: budget
    })
})

//Show
app.get('/:indexOfBudgetItems', (req, res)=> {
    res.render('Show', {
        budget: budget[req.params.indexOfBudgetItems]
    })
});


app.listen(PORT, ()=>{
    console.log('listening on PORT ' + PORT)
})