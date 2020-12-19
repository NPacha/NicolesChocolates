const express = require('express');
const app = express();
const PORT = 3000;

app.get('//:num', (req, res)=> {
    const num = parseInt(req.params.num);
    const nextNum = num -1;
    res.send(
    `
    <h1>${num} Bottles of Beer on the wall</h1>
    <h2><a href="${nextNum}">Take one down, pass it around"</a></h2>
    `
    )
})



app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})