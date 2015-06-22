var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
var db = require('./models');



app.get('/', function(req, res){
  res.render('index');
});

app.get('/activities', function(req, res) {
  
})






server.listen(port, function() {
  console.log("listening on port");
});


