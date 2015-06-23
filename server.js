var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var server = require('http').createServer(app);
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
// var LocalStrategy = require('passport-local');
// var FacebookStrategy = require('passport-facebook');

var db = require('./app/models/models');

require('./config/passport')(passport);

var path = require("path");

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(passport.session());

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 

require('./app/routes.js')(app, passport);

server.listen(port, function() {
  console.log("listening on port " + port);
});


