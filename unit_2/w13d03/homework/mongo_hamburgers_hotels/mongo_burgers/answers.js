const MONGO_URI = 'mongodb+srv://npacha:redroses123@cluster0.fhshy.mongodb.net/burgers?retryWrites=true&w=majority';
const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.once('connected', () => console.log('Mongoose is all ready'))

const {model, Schema} = require('mongoose');


//Create the product schema
const burgerSchema = new Schema({
    meat: String,
    cheese: Boolean,
    toppings: Array
})

//Create a model that will connect us to MongoDB
const Burger = model('Burger', burgerSchema);


// create 5 burgers (at least 3 should be beef)
// Burger.create({meat: 'beef', cheese: true, toppings: ['lettuce', 'pickles', 'ketchup', 'mustard']}, (err, createdBurger)=> {
//     if(!err){
//         console.log(createdBurger)
//     } else {
//         console.log(err)
//     }
// })

// Burger.create({meat: 'turkey', cheese: false, toppings: ['spinach', 'tomatoe', 'mayo', 'bacon']}, (err, createdBurger)=> {
//     if(!err){
//         console.log(createdBurger)
//     } else {
//         console.log(err)
//     }
// })

// Burger.create({meat: 'bison', cheese: true, toppings: ['arugula', 'cucumber', 'ranch']}, (err, createdBurger)=> {
//     if(!err){
//         console.log(createdBurger)
//     } else {
//         console.log(err)
//     }
// })


// Burger.create({meat: 'chicken', cheese: true, toppings: ['tomatoe', 'lettuce', 'pickles']}, (err, createdBurger)=> {
//     if(!err){
//         console.log(createdBurger)
//     } else {
//         console.log(err)
//     }
// })

// Burger.create({meat: 'beef', cheese: true, toppings: ['pickles', 'mustard', 'mayo']}, (err, createdBurger)=> {
//     if(!err){
//         console.log(createdBurger)
//     } else {
//         console.log(err)
//     }
// })

// Burger.create({meat: 'beef', cheese: true, toppings: ['spinach', 'prosciutto', 'mayo']}, (err, createdBurger)=> {
//     if(!err){
//         console.log(createdBurger)
//     } else {
//         console.log(err)
//     }
// })


// find all the burgers

// Burger.find((err, burgers)=>{
//     if(!err){
//         console.log(burgers)
//     } else {
//         console.log(err)
//     }
// }
// )


// show just one burger 

// Burger.findOne((err, burger)=> {
//     if(!err){
//         console.log(burger)
//     } else {
//         console.log(err)
//     }
// })


// update just the toppings of one burger
// Burger.findOneAndUpdate({ meat: 'chicken'}, {cheese: 'false'}, {new: true}, (err, burger)=>{
//     if(!err){
//         console.log(burger)
//     } else {
//         console.log(err)
//     }
// })

// delete one of your burgers
// Burger.deleteOne((err, deletedBurger)=> {
//     if(!err){
//         console.log(deletedBurger)
//     } else {
//         console.log(err)
//     }
// })


// Burger.deleteOne({meat: 'turkey'}, (err, deletedBurger)=> {
//     if(!err){
//         console.log(deletedBurger)
//     } else {
//         console.log(err)
//     }
// });
