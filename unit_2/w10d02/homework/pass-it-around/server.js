const express = require('express');
const app = express();
const PORT = 3000;

//Index
app.get('/', (req, res)=> {
    const num = 99;
    const nextNum = num -1;
    res.send(
    `
    <h1>${num} Bottles of Beer on the wall</h1>
    <h2><a href="${nextNum}">Take one down, pass it around.....</a></h2>
    `
    )
})

//Show
app.get('/:num', (req, res)=> {
    let num = parseInt(req.params.num);
    const nextNum = num -1;

    if(num === 0){
        res.send(
            `
            <h1>No more bottles of beer on the wall!</h1>
            <h2><a href="/">Start Over!</a></h2>
            `)
    } else {
    res.send(
    `
    <h1>${num} Bottles of Beer on the wall</h1>
    <h2><a href="${nextNum}">Take one down, pass it around.....</a></h2>
    `
        )
    }
})



app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})