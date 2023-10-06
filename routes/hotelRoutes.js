const express = require('express');
const hotelController = require('../controllers/hotelController');
const router = express.Router();
const verifyToken = require('../middleware/auth.js');


router.post('/add-hotel', hotelController.createHotel);

router.get('/home', verifyToken, hotelController.getHotels);


router.get('/:id', hotelController.getHotelById);

router.put('/update-hotel/:id', hotelController.updateHotelById);


router.delete('/:id', hotelController.deleteHotelById);


module.exports = router;