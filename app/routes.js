// app/routes.js


module.exports = function(app, passport, db) {
    var db = require('./models/user.js');

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // =====================================
    // CLIENT ACTIVITY ROUTES ==============
    // =====================================

    app.get("/activities", function (req, res){
        db.Activity.find({}, function(err, activities) {
           res.render('activities.ejs');
        })
    });


    // end of CLIENT ACTIVITY ROUTES =======


    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true
    }));

    app.get('/signup/:role', function(req, res) {
        if (req.params.role === 'customer') {
            res.render('customer_signup.ejs', { message: req.flash('signupMessage') });
        } else if (req.params.role === 'vendor') {
            res.render('vendor_signup.ejs', { message: req.flash('signupMessage') });
        } else {
            res.send('Page no found');
        }
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
        }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
