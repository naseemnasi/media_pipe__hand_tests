const express = require("express");
const chalk = require("chalk");
const app = express();
const expressOasGenerator = require("express-oas-generator");
expressOasGenerator.init(app, {});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.get('/', function (req, res) {
//   res.render('index.ejs',{ message: 'Welcome to AI Test' }
//   )
// });
console.log(__dirname);

// app.use(express.static(__dirname + '/public'));
app.use("/static", express.static('./public/'));


require("./src/routes/index")(app);
require("dotenv").config();

app.set("port", process.env.APP_PORT || config.appPort);

app.listen(app.get("port"), function () {
  console.log(
    chalk.green("Server is listening on port "),
    chalk.red.bold(app.get("port"))
  );
});

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
