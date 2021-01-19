require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
const Log = require('./models/log');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'))

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Connect to our Database
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('connected', ()=> console.log('mongoose is connected'));



//Routes

// Index
app.get('/logs', (req, res) => {
    Log.find({}, (err, foundLogs) => {
        if(!err){
            res 
              .status(200)
              .render('Index', {
                  logs: foundLogs
              })
        } else {
            res 
              .status(400)
              .send(err)
        }
    })
})


// New
app.get('/logs/new', (req,res) => {
    res.render('New')
})

// Deletet
app.delete('/logs/:id', (req, res) => {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
        if(!err){
            res.redirect('/logs')
        } else {
            res 
              .status(400)
              .send(err)
        }
    })
})

//Update
app.put('/logs/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
        if(!err){
            res.redirect('/logs')
        } else {
            res 
              .status(400)
              .send(err)
        }
    })
})


//Create
app.post('/logs', (req, res) => {
    Log.create(req.body, (err, createdLog) => {
        if(!err){
            res.redirect('/logs')
        } else {
            res
              .status(400)
              .send(err)
        }
    })
})

// Edit
app.get('/logs/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(!err){
            res
              .status(200)
              .render('Edit', {
                  log: foundLog
              })
        } else {
            res
              .status(400)
              .send(err)
        }
    })
})


// Show
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        if(!err){
            res
              .status(200)
              .render('Show', {
                  log: foundLog
              })
        } else {
            res
              .status(400)
              .send(err)
        }
    })
})

app.listen(PORT, ()=> console.log('started up'));