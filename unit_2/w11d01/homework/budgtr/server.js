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

//Index
app.get('/', (req, res)=> {
    res.render('Index', {
        budget: budget
    })
})


app.listen(PORT, ()=>{
    console.log('listening on PORT ' + PORT)
})