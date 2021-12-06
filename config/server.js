var express = require('express')
var app = express()

const routs = require('../app/routes/index');
routs(app);

module.exports = app;