const { string } = require('joi');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
})


const UsersModel = mongoose.model('users', UserSchema);

module.exports = UsersModel;