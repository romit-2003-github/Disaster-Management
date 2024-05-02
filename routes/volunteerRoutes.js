const express = require('express');
const { addVolunteer, getTotalVolunteers, getVolunteer, removeVolunteer } = require('../controllers/volunteerController');

//router object
const router = express.Router();

// Add volunteer into databse
router.post('/addVolunteer', addVolunteer);

// Get all volunteers
router.get('/totalVolunteers', getTotalVolunteers);

// Get a volunteer by id
router.get('/volunteer/:id', getVolunteer);

// Remove a volunteer by id
router.delete('/removeVolunteer/:id', removeVolunteer);

module.exports = router;