var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/babypassdb");

var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  title: String,
  address: String,
  image: String,
  description: String,
  date: Date,
  capacity: Number,
  age_from: Number,
  age_to: Number
});

var UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  activities: [ ActivitySchema ]
});

var User = mongoose.model('User', UserSchema);
var Activity = mongoose.model('Activity', ActivitySchema);

module.exports.User = User;
module.exports.Activity = Activity;

module.exports = {
  'url': "mongodb://localhost/babypassdb"
}



