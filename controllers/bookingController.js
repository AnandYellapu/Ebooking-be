// bookingController.js
const Booking = require('../models/bookingModel');

const createBooking = async (req, res) => {
  try {
    const { discountedPrice,hotelId, address, startDate, endDate, numRooms } = req.body;
    // Create a new booking record
    const newBooking = new Booking({
    discountedPrice,
      hotelId,
      address,
      startDate,
      endDate,
      numRooms,
    });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

module.exports = {
  createBooking,
};
