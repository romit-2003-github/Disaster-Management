const mongoose = require('mongoose');
const colors = require('colors');
const crypto = require('crypto');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email is already registered'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
    phoneno : {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    authCode:{
        type: String,
        required : true,
    },
    role :{
        type: String,
        enum: ['admin'],
        default: 'admin'
    },
    adminLevel:{
        type: String,
    },
    department: {
        type : String,
    }
}, 
{
    timestamps: true
});

const adminModel = mongoose.model('admins', adminSchema);
module.exports = adminModel;
