const adminModel = require('../models/adminModels');
const crypto = require('crypto');

const registerAdminController = async (req, res) => {
    try {
        const { name, email, password, address, phoneno, role, adminLevel, department } = req.body;

        const adminExists = await adminModel.findOne({ email });

        if (adminExists) {
            res.status(400);
            throw new Error("Admin already exists");
        }

        const authCode = crypto.randomBytes(32).toString('hex');
        console.log("AuthCode is" , authCode);

        const admin = await adminModel.create({ name, email, password, address, phoneno, authCode, role, adminLevel, department});
        res.status(201).json({
            success: true,
            admin,
            authCode
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
};

// Admin Login
const loginAdminController = async (req, res) => {
    try {
        const { email, password, authCode } = req.body;
        const admin = await adminModel.findOne({ email, password, authCode });
        if (!admin) {
            res.status(400).json({
                success: false,
                message: "Invalid admin credentials"
            });
        }

        if(admin.authCode !== authCode) {
            res.status(400).json({
                success: false,
                message: "Invalid authentication Code"
            });
        }

        res.status(200).json({
            success: true,
            message: "Admin logged in successfully",
            authCode : admin.authCode
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { registerAdminController, loginAdminController };