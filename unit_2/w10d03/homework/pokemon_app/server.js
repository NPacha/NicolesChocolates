const express = require('express');
const app = express();
const PORT = 3000;

//Models
const pokemon = require('./models/pokemon.js')

//Index
app.get('/', (req, res)=> {
    res.send(
        `Welcome to the Pokemon App!`
    )
})


//Show
app.get('/pokemon', (req, res)=> {
    res.send(
        res.send(pokemon)
    )
})



//Listen
app.listen(PORT, ()=>{
    console.log('listening on port' + PORT)
})