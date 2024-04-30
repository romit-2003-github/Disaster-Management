const express = require('express');
const { loginController, registerController } = require('../controllers/userController');
const { registerAdminController, loginAdminController } = require('../controllers/adminController');

//router object
const router = express.Router();

// routers

// POST || Login
router.post('/login', loginController);

// POST || Register
router.post('/register', registerController);

// POST || Admin Register
router.post('/adminSignUp', registerAdminController);

// POST || Admin Login
router.post('/adminLogin', loginAdminController);

//exporting router
module.exports = router; 
