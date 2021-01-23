//Import Needed Modules
require('dotenv').config();//this processes the .env file
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express(); //create an instance of express
const PORT = 4000;
const Product = require('./models/products');


//Set up the body parser Middleware that allows us access to the req.body
app.use(express.urlencoded({extended: true})); //parses forms
app.use(express.json()); //parses raw json data
// app.use((req,res, next)=> {
//     console.log(req.body)
//     next()
// });
app.use(methodOverride('_method')); //What is the purpose of this? Make sure to put it here, it needs req.body to work. Using method to capture query parameter, and the value is going to be whatever method we actually want to use. Needs to match query paramater. 


//tell the computer to look in a directory called public when you see a .js file or a .css file
app.use(express.static('public'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()) //Gives us back a function that is able to parse the view files

//Connect to MongoDB with mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


//Check to see if mongoose is able to connect us to MongoDB
mongoose.connection.once('connected', ()=> console.log('Mongoose is ready'));

//CRUD Restful Routes

//CREATE
/*New Route*/
app.get('/NicolesChocolates/new', (req, res)=> {
    res.render('New');
})

/*Create Route*/
app.post('/NicolesChocolates', (req, res) => {
    Product.create(req.body, (failure, success) => {
        if(!failure){
            res
                .status(200)
                .redirect('/NicolesChocolates')
        } else {
            res
                .status(400)
                .send(failure)
        }
    })
})


//READ
/*Index*/
app.get('/NicolesChocolates', (req, res)=> {
    Product.find({}, (err, foundProducts) => {
        if(!err){
            console.log(foundProducts)
            res
                .status(200) 
                .render('Index', {
                    products: foundProducts
                })
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})

//Show
app.get('/NicolesChocolates/:id', (req, res)=> {
    Product.findById(req.params.id, (err, foundProduct)=> {
        if(!err){
            res
                .status(200)
                .render('Show', {
                    product: foundProduct
                })
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})




//EDIT
app.get('/NicolesChocolates/:id/edit', (req, res)=> {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(!err){
            res
                .status(200)
                .render('Edit', {
                    product: foundProduct
                })
        } else {
            res
                .status(400)
                .send(err)
        }
    })
})




//UPDATE

app.put('/NicolesChocolates/:id', (req, res)=> {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedProduct)=> {
        if(!err){
            res
                .status(200)
                .redirect('/NicolesChocolates')
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})


//DELETE
app.delete('/NicolesChocolates/:id', (req, res)=> {
    Product.findByIdAndDelete(req.params.id, (err, foundProduct)=> {
        if(!err){
            res
                .status(200)
                .redirect('/NicolesChocolates')
        } else {
            res
                .status(400)
                .json(err)
        }
    })
})

//BUY ROUTE
app.put('/NicolesChocolates/:id/buy', (req, res)=> {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedProduct)=> {
        if(!err){
            updatedProduct.qty -= 1;
            updatedProduct.save();
            res
                .status(200)
                .redirect('/NicolesChocolates')
                
        } else {
            res
                .status(400)
                .json(err)
        }
    })
    // User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser)=> {
    //     if(!err){
    //         console.log(req.body.name)
    //         updatedUser.shoppingCart.push(req.body.name)
    //     }
    // })
    
    
})


//SEEDING ROUTE
app.get('/seed', async (req, res) => {
    const newProducts =
        [
        {
            name: 'Dark Chocolate with Chilis',
            description: 'Dark chocolate spiced with cayenne',
            img: '',
            price: 9,
            qty: 15
            }, {
            name: 'Milk Raspberry',
            description: 'Light milk chocolate topped with freeze dried raspeberries',
            img: '',
            price: 9,
            qty: 10
            }, {
            name: 'Caramel Decadence',
            description: 'Creamy caramel filled bittersweet chocolate topped with sea salt',
            img: '',
            price: 10,
            qty: 20
            }
        ]
    
        try {
        const seedItems = await Product.create(newProducts)
        res.send(seedItems)
        } catch (err) {
        res.send(err.message)
        }
    })
    



app.listen(PORT, ()=>{
    console.log('We in the house at ' + PORT)
})