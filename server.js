// Module dependencies

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const helper = require('./helper');

const config = require('./config');

// MongoDB Initialization

const models = helper.getGlobbedPaths(config.const.dbModels);
models.forEach((modelPath) => {
  // eslint-disable-next-line
  require(path.resolve(modelPath));
});

mongoose.Promise = require('bluebird');

mongoose.connect(config.const.dbUri, ((err) => {
  if (err) {
    // eslint-disable-next-line
    console.log('Could not connect to MongoDB', err);
  } else {
    // Enabling mongoose debug mode if required
    mongoose.set('debug', false);
  }
}));


// ExpressJS Initialization
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());
app.options('*', cors());
app.use(express.static('public'));

const routes = helper.getGlobbedPaths(config.const.serverRoutes);
routes.forEach((routePath) => {
  // eslint-disable-next-line
  require(path.resolve(routePath))(app);
});

// NodeJS Server Initialization
app.listen(config.const.apiPort, () => {
  // eslint-disable-next-line
  console.log(`App is running on port ${config.const.apiPort}`);
});
