var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
var db = require('./models');

var path = require("path");

app.use(morgan('dev'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/activities', function(req, res) {
  db.Activity.find({}, function(err, activities) {
    res.send(activities);
  })
})

app.get('/activity/:id', function(req, res) {
  // console.log(req)
  // console.log(res)
  var activityId = req.params.id;
  // db.Activity.find({activityId}, function(err, activities) {
  //   // res.send(activities);
  // })
})


server.listen(port, function() {
  console.log("listening on port");
});


