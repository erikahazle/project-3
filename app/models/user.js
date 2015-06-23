var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
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

var userSchema = mongoose.Schema({
    local: {
        email: String,
        password: String,
        name: String,
        phone: String,
        role: String,
        activities: [ ActivitySchema ]
    }
    // facebook         : {
    //     id: String,
    //     token: String,
    //     email: String,
    //     name: String,
    //     activities: [ ActivitySchema ]
    // }
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