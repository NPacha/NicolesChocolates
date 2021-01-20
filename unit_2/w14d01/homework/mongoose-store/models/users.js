const {model, Schema} = require('mongoose');

//Create user schema
const userSchema = new Schema({
    username: String, 
    shoppingCart: Array
})

//Create the model that will connect us to MongoDB
const User = model('User', userSchema);

module.exports = User;