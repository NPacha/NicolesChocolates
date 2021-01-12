require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const Schema = mongoose.Schema;

console.log(process.env.MONGO_URI)

const hotelSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        location: String,
        rating: { type: Number, max: 5},
        vacancies: Boolean, 
        rooms: [Object],
        tags: [String], 
        
    }
)

const Hotel = mongoose.model('Hotel', hotelSchema);
//Model

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
})

mongoose.connection.once('connected', ()=> {
    console.log('Mongo connected the world is yours')
})

//INDUCES

//INDEX

app.get('/hotels', (req, res)=> {
    Hotel.find({}, (err, foundHotels)=> {
    if(!err){
        res
            .status(200)
            .json(foundHotels);
    } else {
        res
            .status(400)
            .json(err);
    }

    })
})

//NEW

//DELETE
app.delete('/hotels/:id', (req, res)=> {
    Hotel.findByIdAndDelete(req.params.id, (err, foundHotel)=> {
        if(!err){
            res
                .status(200)
                .json(foundHotel)
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})

//UPDATE

app.put('/hotels/:id', (req, res)=> {
    Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHotel)=> {
        if(!err){
            res
                .status(200)
                .json(updatedHotel)
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})

//CREATE

app.post('/hotels', (req, res)=> {
    Hotel.create(req.body, (err, createdHotel)=> {
        if(!err){
            res
                .status(200)
                .json(createdHotel)
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})

//EDIT

//SHOW
app.get('/hotels/:id', (req, res)=> {
    Hotel.findById(req.params.id, (err, foundHotel)=> {
        if(!err){
            res
                .status(200)
                .json(foundHotel)
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})



app.listen(PORT, ()=> console.log('we in the building at ' + PORT))

