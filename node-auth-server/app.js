const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const index = require('./routes/index');

const app = express();

const corsOptions = {
    origin: /localhost:\d{2,5}$/,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');

// uncomment after placing your favicon in /public
app.use(logger('combined'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(cors(corsOptions));

app.use('/', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
