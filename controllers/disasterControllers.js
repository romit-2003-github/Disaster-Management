const mongoose = require('mongoose');
const multer = require('multer');

const disasterModel = require('../models/disasterModels');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage });

const addDisaster = async (req, res) => {
    try {
        const { address, district, state, description, type, status } = req.body;

        if(!req.user)
        {
            return res.status(401).json({
                message: "Unauthorized Access"
            });
        }

        const userId = req.user._id;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid User ID"
            })
        }
        const images = [];

        upload.array('images')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    message: "Failed to upload images"
                });
            }
        });

        if (req.files) {
            req.files.forEach((file) => {
                images.push(`/uploads/${file.filename}`);
            });
        }

        const newReport = await disasterModel({
            userId,
            address,
            district,
            state,
            description,
            type,
            status,
            images
        });

        await newReport.save();

        res.status(201).json({
            success: true,
            userId,
            newReport
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const getDisasters = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

const getDisaster = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

const removeDisaster = async (req, res) => {
    try {

    }
    catch (error) {

    }
}

module.exports = { addDisaster, getDisasters, getDisaster, removeDisaster };