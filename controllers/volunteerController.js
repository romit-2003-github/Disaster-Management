const volunteerModel = require('../models/volunteerModels');

const addVolunteer = async(req, res) =>{
    try{
        const {name, age, gender, contact, state, district, address, service} = req.body;

        const volunteer = await volunteerModel.create({name, age, gender, contact, state, district, address, service})

        res.status(201).json({
            success: true,
            volunteer
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const getTotalVolunteers = async(req, res) =>{
    try{
        const volunteers = await volunteerModel.find({});
        res.status(200).json({
            success: true,
            volunteers
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getVolunteer = async(req, res) =>{
    try{
        const id = req.params.id;
        const volunteer = await volunteerModel.findById(id);
        res.status(200).json({
            success: true,
            volunteer
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const removeVolunteer = async(req, res) =>{
    try{
        const id = req.params.id;
        const volunteer = await volunteerModel.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            volunteer
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {addVolunteer, getTotalVolunteers, getVolunteer, removeVolunteer};