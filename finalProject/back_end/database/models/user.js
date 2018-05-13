const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
        _id: { type: String, default: uuidv4 },
        sessionId: String,
        userName: {type: String, required: true},
        hashedPassword: {type: String, required: true},
        petId: String,
        newUser: {type: Boolean, default: true},
        lastLogin: {type: Date, default: Date.now}
});                                         

var User = mongoose.model('User', userSchema);
 
module.exports = User;