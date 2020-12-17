const express = require('express');
const app = express();
const PORT = 3000;
///GREETINGS///
app.get('/greeting', (req, res)=>{
    res.send('<h1>Hello stranger</h1>')
});

app.get('/greeting/:name', (req, res)=> {
    res.send(`Hello, ${req.params.name}! It's so great to see you!`)
})



app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
});