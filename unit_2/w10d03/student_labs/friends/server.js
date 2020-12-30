const express = require('express');
const app = express();
const PORT = 3000;

const friends = [
    {name: 'Marta', 
     age: 31,
     location: 'Aurora',
     eyeColor: 'Blue',
     hairColor: 'blonde'},

     {name: 'Nicole', 
     age: 28,
     location: 'Denver',
     eyeColor: 'Blue',
     hairColor: 'blonde'},

     {name: 'Emily', 
     age: 29,
     location: 'Denver',
     eyeColor: 'Blue',
     hairColor: 'Brown'},


];

//Index 
app.get('/friends', (req, res)=>{
    res.send(friends);
})

//Index
app.get('/friends')

//Show 

app.get('/friends/:index', (req, res)=> {
    res.send(friends[req.params.index])
})



app.listen(PORT, ()=>{
    console.log('listening on PORT' + PORT)
})