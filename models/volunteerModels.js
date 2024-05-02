const mongoose = require('mongoose');
const colors = require('colors');

const volunteerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number,
    },
    gender:{
        type: String,
        required: true,
        trim: true
    },
    contact:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    district:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    service:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const volunteerModel = mongoose.model('volunteers', volunteerSchema);
module.exports = volunteerModel;