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

var activity2 = {
    title: 'Baby dancing',
    address: '43 Fake Street.',
    image: 'someurl.here.com',
    description: 'learn to dance with style',
    capacity: 10,
    age_from: 2,
    age_to: 4
  };

var customer1 = db.User.create({
  name: 'Erika',
  email: 'erika@mail.com',
  phone: '3554-234-2323',
  role: 'Customer'
}, function(err, User) {
  console.log(User);
});

var customer2 = db.User.create({
  name: 'Brian',
  email: 'brian@mail.com',
  phone: '3554-234-2323',
  role: 'Customer'
}, function(err, User) {
  console.log(User);
});

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
  User.activities[0].customers.push(customer1._id);
  User.save();
  console.log(User);
});












