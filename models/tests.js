const mongoose = require('mongoose');
let testSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
       },
        author: {
        type: String,
        required: true
       },
        description: {
        type: String,
        required: true
       }
       });
let tests = module.exports = mongoose.model('tests', testSchema);