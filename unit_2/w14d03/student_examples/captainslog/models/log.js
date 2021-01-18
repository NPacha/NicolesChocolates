const { Schema, model } = require('mongoose');

const logSchema = new Schema({
    title: { type: String, required: true},
    entry: {type: String, required: true},

}, {
    timestamps: true
})

module.exports = model('Log', logSchema);