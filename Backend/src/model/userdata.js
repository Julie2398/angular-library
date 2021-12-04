const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user1:user1@casestudy.4jdff.mongodb.net/LIBRARYANGULAR?retryWrites=true&w=majority');

const Schema2 = mongoose.Schema;

const UserSchema = new Schema2({
    email:String,
    number:String,
    password1:String,
    password2:String
});

var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;