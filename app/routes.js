module.exports = function(app, passport) {
  app.get('/', function(req, res){
    res.render('index');
  });

  app.get('/login', function(req, res) {
    res.render('login.ejs', {message: req.flash('loginMessage') });
  });

  app.get('/signup', function(req, res) {
    res.render('signup.ejs', {message: req.flash('signUpMessage') });
  });

  // process the signup form
  // app.post('/signup', do all our passport stuff here);


  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
      user : req.user // get the user out of session and pass to template
    });
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/activities', function(req, res) {
    db.Activity.find({}, function(err, activities) {
      res.send(activities);
    })
  })
}

function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
      return next();
  // if they aren't redirect them to the home page
  res.redirect('/');
}
