const mongoose = require('mongoose');
const colors = require('colors');

const disasterSchema = mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },  
    address: {
        type: String,
        required: true,
        trim: true
    },
    district: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: [String],
    }
},{
    timestamps: true
});

const disasterModel = mongoose.model('disasters', disasterSchema);
module.exports = disasterModel;;