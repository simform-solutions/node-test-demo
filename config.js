const dbUri = 'mongodb://localhost:27017/node-test';


exports.const = {
  apiPort: 10001,
  dbUri,
  serverRoutes: 'modules/*/routes/*.js',
  dbModels: 'modules/*/models/*.js',
};
