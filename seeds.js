var REPL = require('repl');
var db = require('./models');

var repl = REPL.start('BabyPass >');
repl.context.db = db;

db.User.collection.remove();

db.User.create({
    name: 'Nick',
    email: 'nick@mail.com',
    phone: '344-234-2323',
    role: 'Vendor' 
}, function(err, User){
  User.activities.push({
    title: 'Swimming',
    address: '123 Fake Street.',
    image: 'url.here.com',
    description: 'learn to swim',
    capacity: 20,
    age_from: 3,
    age_to: 6
    // user_id: ''
  });
  // User.activities.push(activity1);
  User.save();
});


