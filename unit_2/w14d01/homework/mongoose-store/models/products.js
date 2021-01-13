const {model, Schema} = require('mongoose');


//Create  the product schema
const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    img: String,
    price: { type: Number, min: 0 },
    qty: { type: Number, min: 0}
})

//Create the model that will connect us to MongoDB
const Product = model('Product', productSchema);

module.exports = Product;



