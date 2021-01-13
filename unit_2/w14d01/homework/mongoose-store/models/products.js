const {model, Schema} = require('mongoose');


//Create  the product schema
const productSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})

//Create the model that will connect us to MongoDB
const Product = model('Product', productSchema);

module.exports = Product;



