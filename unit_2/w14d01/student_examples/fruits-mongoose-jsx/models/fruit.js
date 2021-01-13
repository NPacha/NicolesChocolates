const {model, Schema} = require('mongoose');

const fruitSchema = new Schema({
    name: {type: String, required: true},
    color: String, 
    readyToEat: Boolean
})
//The keys on this schema need to match up with the keys on the form in the New.jsx form. Very important. 

const Fruit = model('Fruit' /*collection it's going to go find or create inside the database*/, fruitSchema)
//MODELS ARE ALWAYS CAPITALIZED AND SINGULAR

module.exports = Fruit;