// app/routes.js

module.exports = function(app, passport, db, moment) {

    var db = require('./models/user');

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.get('/login/:role', function(req, res) {
        if (req.params.role === 'customer') {
            res.render('login.ejs', { message: req.flash('loginMessage') }); 
        } else if (req.params.role === 'vendor') {
            res.render('vendor_login.ejs', { message: req.flash('loginMessage') }); 
        } else {
            res.send('Page no found :(');
        }
    });

    app.post('/login/customer', passport.authenticate('local-login', {
        successRedirect : '/profile/customer',
        failureRedirect : '/login/customer',
        failureFlash : true
    }));

    app.post('/login/vendor', passport.authenticate('local-login', {
        successRedirect : '/profile/vendor',
        failureRedirect : '/login/vendor',
        failureFlash : true
    }));

    app.get('/signup/:role', function(req, res) {
        if (req.params.role === 'customer') {
            res.render('customer_signup.ejs', { message: req.flash('signupMessage') });
        } else if (req.params.role === 'vendor') {
            res.render('vendor_signup.ejs', { message: req.flash('signupMessage') });
        } else {
            res.render('index.ejs');
        }
    });

    app.post('/signup/customer', passport.authenticate('local-signup', {
        successRedirect : '/profile/customer',
        failureRedirect : '/signup/customer',
        failureFlash : true
    }));

    app.post('/signup/vendor', passport.authenticate('local-signup', {
        successRedirect : '/profile/vendor',
        failureRedirect : '/signup/vendor',
        failureFlash : true
    }));

    app.get('/profile/:role', isLoggedIn, function(req, res) {
        if (req.params.role === 'customer') {
            res.render('profile.ejs', {user : req.user});
        } else if (req.params.role === 'vendor') {
            res.render('vendor_profile.ejs', {user : req.user});
        } else {
            res.send('Page not found');
        }
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });



     // =====================================
    // CLIENT ACTIVITY ROUTES ==============
    // =====================================

    app.get("/activities", function (req, res){
        db.Activity.find({}, function(err, activities) {
           res.send(activities);
        })
    });

    app.get('/activities/new', function(req, res){
        res.render('activity_new.ejs');
    });

    app.post('/activities', isLoggedIn, function(req, res) {
        var newActivity = req.body;
        db.Activity.create(newActivity, function(err, activity) {
            db.User.findById(req.user._id, function(err, user) {
                user.local.activities.push(activity);
                user.save();
                res.redirect('/profile/vendor');
            })
            
        })
    })

    app.get("/imagelist", function (req, res) {
        db.Activity.find({}, function(err, activities){
            res.send(activities);
        })
    })

    app.get("/activitylist", function (req, res){
        db.Activity.find({}, function(err, activities) {
           res.render('activitylist', { activities: activities, user: req.user, moment: moment });
        })
    });

    app.post('/bookactivity', isLoggedIn, function(req, res) {
        db.Activity.findById(req.body.activity_id, function(err, activity) {
            activity.number_of_bookings.push(req.user._id);
            activity.save();
            console.log(activity);
            db.User.findOne({'_id': req.user._id}, function(err, user) {
                user.local.activities.push(activity);
                user.save();
                console.log(user);
                res.send(user);
            })
        })
    })

    app.post('/deleteactivity', isLoggedIn, function(req, res) {
        db.User.findById({'_id': req.user._id}, function(err, user) {
            var user_activities = user.local.activities;
            var activity = req.body.activity_id;
            db.Activity.findById({'_id': req.body.activity_id}, function(err, activity) {
                var activityIndex = user_activities.indexOf(activity);
                user_activities.splice(activityIndex, 1);
                db.User.update({'_id': req.user._id}, {$set: {local: {email: user.local.email, name: user.local.name, password: user.local.password, activities: user_activities}}}, function(err, user) {
                    res.send(user);
                });
            })
            
        })
    })

    // end of CLIENT ACTIVITY ROUTES =======




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
