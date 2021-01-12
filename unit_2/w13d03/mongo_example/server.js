const MONGO_URI = "mongodb+srv://arthur:Td9VJXbbc3k2yR2@cluster1.mauz5.mongodb.net/npacha?retryWrites=true&w=majority";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true}, //makes it required to have a value in the name field
    isCool: Boolean
})
//This is the schema for the student

//Model
const Student = mongoose.model('Student', studentSchema);
//Purpose of Model 1. Connect us to collection/create collection if there is not one already created 2.Schema that determines what type of data it lets into collection

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, //we want to use the new one because the new one is new
    useUnifiedTopology: true,
    useCreateIndex: true
})
//Connecting to Mongo DB database

mongoose.connection.once('connected',() => console.log('connected to mongo'));

//Basic REST API
//INDUCES
app.use(express.urlencoded({extended: true})); //Let's us use url encoded data from a string
app.use(express.json());

app.post('/students', (req, res)=> {
    Student.create(req.body, (err, createdStudent) => {
        if(!err){
            res
                .status(200)
                .json(createdStudent)
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})

app.listen(PORT, ()=> console.log(`We are listening on ${PORT}`));