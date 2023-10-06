// bookingModel.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  discountedPrice : { type: String, required: true },
  hotelId: { type: mongoose.Schema.Types.ObjectId, required: true },
  address: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  numRooms: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
