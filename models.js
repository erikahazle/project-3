var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/babypassdb");

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  activities: [ActivitySchema]
});

var ActivitySchema = new Schema({
  title: String,
  address: String,
  image: String,
  description: String,
  date: Date,
  capacity: Number,
  age_from: Number,
  age_to: Number,
  customers: [UserSchema]
});

var User = mongoose.model('User', UserSchema);
var Activity = mongoose.model('Activity', ActivitySchema);

model.exports.User = User;
model.exports.Activity = Activity;



