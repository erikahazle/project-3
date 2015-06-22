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



app.get('/', function(req, res){
  res.send('hello mum');
});








server.listen(port, funtion() {
  console.log("listening on port");
});


