require('dotenv').config();

const express = require('express');
const config = require('./Config/Db');
const startServer = require('./Components/Route/Route');

const app = express();
const port = process.env.PORT;

config.sync()
  .then(() => {
    startServer(app, port);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
