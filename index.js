require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./Config/Db');
const startServer = require('./Components/Route/Route');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

config
  .sync()
  .then(() => {
    startServer(app, port);
  })
  .catch((err) => {
    console.error(err);
  });
