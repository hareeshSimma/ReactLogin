var mongoose = require('mongoose');
mongoose.connect('mongodb://hareeshsimma:react@ds231549.mlab.com:31549/hareeshsimma');

const UserSchema  = mongoose.Schema({
    userName: {type:String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

var User = mongoose.model('User', UserSchema );
module.exports = User;
