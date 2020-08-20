const express = require('express');
const bodyparse = require('body-parser');
var cors = require('cors');

const mongoose = require('./db.js');
var employeeController = require('./controllers/employeeController')

var app = express();
app.use(bodyparse.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.listen(3000, () => console.log('connected@3000'));

app.use('/employees', employeeController)
app.options('*', cors());