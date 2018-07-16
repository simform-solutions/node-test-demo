
const post = require('../controllers/post.controller');

module.exports = (app) => {
  app.route('/api/post/create').post(post.create);
  app.route('/api/post/getPost/:id').get(post.getPost);
  app.route('/api/post/getAllPost').get(post.getAllPosts);
  app.route('/api/post/update/:id').put(post.update);
  app.route('/api/post/delete/:id').delete(post.delete);
};
