const userModel = require('../models/userModels');

// Login
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        res.status(200).json({
            success: true,
            user
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

// Register
const registerController = async (req, res) => {
    try {
        const { name, email, password, phoneno, address } = req.body;

        const userExists = await userModel.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("User already exists");
        }
        
        const user = await userModel.create({ name, email, password, phoneno, address });
        res.status(201).json({
            success: true,
            user
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = { loginController, registerController };