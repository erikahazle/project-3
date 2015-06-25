// app/routes.js

module.exports = function(app, passport, db) {

    var db = require('./models/user');

    app.get('/', function(req, res) {
        res.render('index.ejs', {user: req.user});
    });

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

    app.post('/signup/customer', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/signup/customer',
        failureFlash : true
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
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

    app.get("/activitylist", function (req, res){
        db.Activity.find({}, function(err, activities) {
           res.render('activitylist', { activities: activities, user: req.user });
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

    // =====================================
    // VENDOR ACTIVITY ROUTES ==============
    // =====================================

    app.get("/vendor_activity", isLoggedIn, function (req, res){
        // console.log(req.user);
        db.Activity.find({}, function(err, activities) {
           res.render('vendor_activity.ejs', { activities: activities, user: req.user });
        })
    });

    // end of VENDOR ACTIVITY ROUTES =======
 

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}
