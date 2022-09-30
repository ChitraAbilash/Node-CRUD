const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const countryRoutes = require('./routes/country');
const connection = require('./config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRoutes);
app.use(countryRoutes);

connection.connect(function (err) {
  if (err) {
    console.log(err, "Error")
    console.log('error occured while connecting');
  } else {
    console.log('connection created with Mysql successfully');
  }
});

app.listen(3000);
