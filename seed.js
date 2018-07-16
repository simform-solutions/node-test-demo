const mongoose = require('mongoose');
const config = require('./config');
require('./modules/post/models/post.model.js');

const Posts = mongoose.model('posts');
const data = [
  {
    title: 'Test 1',
    author: 'Test 1',
    content: 'Test 1',
  },
  {
    title: 'Test 2',
    author: 'Test 2',
    content: 'Test 2',
  },
  {
    title: 'Test 3',
    author: 'Test 3',
    content: 'Test 3',
  },
];

mongoose.connect(config.const.dbUri, ((err) => {
  if (err) {
    // eslint-disable-next-line
    console.log('Could not connect to MongoDB', err);
  } else {
    Posts.insertMany(data, (error) => {
      if (error) {
        // eslint-disable-next-line
        console.log('something went wrong', error);
      } else {
        // eslint-disable-next-line
        console.log('data has been inserted');
      }
      mongoose.connection.close();
    });
  }
}));
