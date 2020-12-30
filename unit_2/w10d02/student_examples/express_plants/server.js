require('dotenv').config();
//1. Need to set express to be in this file
const express = require('express');

//2. Add express and invoke it. 
const app = express();

const plants = require('./models/plants').plants;
const things = require('./models/plants').things;
const mike = require('./models/plants').mike;
const PORT = 3000;

app.use((req, res, next)=>{
    if(req.query.password === process.env.password){
        next()
    } else {
        res.status(404).send('No Access For You Youre Not The Goat')
    }
})

app.get('/random-plant', (req, res) => {
    const random = Math.floor(Math.random() * plants.length)
    res.send(plants[random])
})



app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/name/:firstName', (req, res) => {
    const name = req.params.firstName;
    const lastName = req.query.lastName;


    res.send(`The name is ${lastName}, ${name} ${lastName}. And I like my martini shaken not stirred`)
})


app.get('/add/:num1/:num2', (req, res)=>{
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)

    if (!isNaN(num1) && !isNaN(num2)){
        res.send(`<h1>The sum is ${num1 + num2}</h1>`)
    } else {
        res.send(`<h1>The sum cant be determined try again</h1>`)
    }
})

app.get('/even/:num', (req, res) => {
    const num = parseInt(req.params.num)
    const nextNum = num + 1;
    const isEven = num % 2 === 0;

    if(isEven){
        res.send(
            `
            <h1>${num} is Even</h1>
            <h2><a href="${nextNum}">Click here to go to ${nextNum}</a></h2>
            `
        )
    } else {
        res.send(
            `
            <h1>${num} is Odd</h1>
            <h2><a href="${nextNum}">Click here to go to ${nextNum}</a></h2>
            `
        )
    }
})





app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})



// What the heck is module.exports?
// What the heck is require?
// How to export multiple peices of data
// What the following lines do
// const express = require('express'); 
// const app = express();
// How to correclty path to a file in the require function

