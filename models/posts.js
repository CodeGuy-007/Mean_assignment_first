const mongoose = require('mongoose');
let postSchema = mongoose.Schema({

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

const post = mongoose.model('posts', postSchema)
module.exports = post