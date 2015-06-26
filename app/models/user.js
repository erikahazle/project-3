var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

mongoose.connect("mongodb://localhost/babypassdb");

var ActivitySchema = mongoose.Schema({
  title: String,
  address: String,
  image: String,
  description: String,
  date: Date,
  time: String,
  capacity: Number,
  age_from: Number,
  age_to: Number,
  number_of_bookings: Array
});

var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String,
        name: String,
        phone: String,
        role: String,
        activities: [ ActivitySchema ]
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', userSchema);
var Activity = mongoose.model('Activity', ActivitySchema);

module.exports = {
    'User': User,
    'Activity': Activity
}