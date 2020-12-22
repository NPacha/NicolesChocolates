const express = require('express');
const app = express();
const PORT = 3000;

//Index
app.get('/', (req, res)=> {
    res.send(
        `Welcome to the Pokemon App!`
    )
})




//Listen
app.listen(PORT, ()=>{
    console.log('listening on port' + PORT)
})