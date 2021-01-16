const { model, Schema } = require('mongoose');

const fruitSchema = new Schema({
    name: { type: String, required: true },
    color: String,
    readyToEat: Boolean
})

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;