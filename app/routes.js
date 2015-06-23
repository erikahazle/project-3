app.get('/', function(req, res){
  res.render('index');
});

app.get('/activities', function(req, res) {
  db.Activity.find({}, function(err, activities) {
    res.send(activities);
  })
})
