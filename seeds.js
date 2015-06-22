var REPL = require('repl');
var db = require('./models');

var repl = REPL.start('BabyPass >');
repl.context.db = db;

db.User.collection.remove();

var activity1 = {
    title: 'Swimming',
    address: '123 Fake Street.',
    image: 'url.here.com',
    description: 'learn to swim',
    capacity: 20,
    age_from: 3,
    age_to: 6
  };

db.Activity.create(activity1, function(err, activity) {
  console.log('activity has been created');
  console.log(activity);
})

var activity2 = {
    title: 'Baby dancing',
    address: '43 Fake Street.',
    image: 'someurl.here.com',
    description: 'learn to dance with style',
    capacity: 10,
    age_from: 2,
    age_to: 4
  };

db.Activity.create(activity2, function(err, activity) {
  console.log('activity has been created');
  console.log(activity);
})

db.User.create({
    name: 'Nick',
    email: 'nick@mail.com',
    phone: '344-234-2323',
    role: 'Vendor' 
}, function(err, User){
  User.activities.push(activity1);
  User.activities.push(activity2);
  User.save();
  console.log(User);
});

db.User.create({
    name: 'Erika',
    email: 'Erika@mail.com',
    phone: '32-234-2323',
    role: 'Customer' 
}, function(err, User){
  User.activities.push(activity1);
  User.save();
  console.log(User);
});

db.User.create({
    name: 'Brian',
    email: 'brian@mail.com',
    phone: '32-234-2323',
    role: 'Customer' 
}, function(err, User){
  User.activities.push(activity1);
  User.save();
  console.log(User);
});












