// Se instancia express
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.text());
mongoose.connect('mongodb://localhost/testback');

const api_routes = require('./app/index');
api_routes(app);
require('./app/routes')(app);

app.listen(port,
    function(){
        console.log("Running at port "+ port);
    }
);

exports.module = exports.app;