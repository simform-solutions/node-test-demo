// Module dependencies

const mongoose = require('mongoose');

const Post = mongoose.model('posts');

exports.create = (req, res) => {
  const post = new Post(req.body);
  post.save((error, savedPost) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(savedPost);
  });
};

exports.getPost = (req, res) => {
  Post.findById(req.params.id, (error, post) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(post);
  });
};

exports.getAllPosts = (req, res) => {
  Post.find({}, (error, posts) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(posts);
  });
};

exports.delete = (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id }, (error) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json({});
  });
};

exports.update = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (error, updatedPost) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(updatedPost);
  });
};
