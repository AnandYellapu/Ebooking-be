// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for users
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password/:resetToken', userController.resetPassword);

module.exports = router;
