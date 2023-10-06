// bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Handle booking requests
router.post('/booking/:id', bookingController.createBooking);

module.exports = router;
