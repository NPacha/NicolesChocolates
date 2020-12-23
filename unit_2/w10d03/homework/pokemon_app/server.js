const express = require('express');
const app = express();
const PORT = 4000;

//Models
const pokemon = require('./models/pokemon.js')

//Middleware

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/pokemon/:id', (req, res)=> {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
})

//Index
app.get('/', (req, res)=> {
    res.send(
        `Welcome to the Pokemon App!`
    )
})




//Show
app.get('/pokemon', (req, res)=> {
    res.render( 'Index', {
     pokemon: pokemon   
    }
    )
})



//Listen
app.listen(PORT, ()=>{
    console.log('listening on port' + PORT)
})

