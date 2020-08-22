require('./config/config')
require('./models/db')

const express = require('express');
const bodyparse = require('body-parser');
var cors = require('cors');
var employeeController = require('./controllers/employeeController')

var app = express();
app.use(bodyparse.json());
app.use(cors({origin: process.env.ORIGIN}));
app.listen(process.env.PORT, () => console.log('connected@3000'));

app.use('/employees', employeeController)
app.options('*', cors());