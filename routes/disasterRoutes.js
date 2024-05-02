const express = require('express');
const { addDisaster, getDisasters, getDisaster, removeDisaster } = require('../controllers/disasterControllers');

const router = express.Router();

// Add Disaster into database
router.post('/addDisaster', addDisaster);

// Get all disasters
router.get('/getDisasters', getDisasters);

// Get a disaster by id
router.get('/getDisaster/:id', getDisaster);

// Remove a disaster by id
router.delete('/removeDisaster/:id', removeDisaster);

module.exports = router;