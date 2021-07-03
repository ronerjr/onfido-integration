var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var onfidoRouter = require('./routes/onfido');
const onfidoConfig = require('./configs/onfido.config');
const onfidoClient = onfidoConfig.setup();

// onfidoClient.webhook.create({
//     url: "https://webhook.site/adcaad0f-25c4-4930-bf91-311132238295"
// });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/onfido', onfidoRouter);

module.exports = app;
