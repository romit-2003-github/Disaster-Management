const mongoose = require('mongoose');
const colors = require('colors');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already registered'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
    },
    phoneno: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user'],
        default: 'user',
    }
}, {
    timestamps: true
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;