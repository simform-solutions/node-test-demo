
// Module dependencies

const mongoose = require('mongoose');

const { Schema } = mongoose;


// Post Schema

const PostSchema = new Schema({
  title: String,
  author: String,
  content: String,
});


mongoose.model('posts', PostSchema);
