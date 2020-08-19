const express = require('express');
const bodyparse = require('body-parser');

const mongoose = require('./db.js');
var employeeController = require('./controllers/employeeController')

var app = express();
app.use(bodyparse.json());

app.listen(3000, () => console.log('connected@3000'));

app.use('/employees', employeeController)