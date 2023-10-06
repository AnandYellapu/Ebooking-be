// const mongoose = require('mongoose');

// const hotelSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   address: { type: String, required: true },
//   location: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageUrl: [{ type: String }],
// });

// const Hotel = mongoose.model('Hotel', hotelSchema);

// module.exports = Hotel;




// const mongoose = require('mongoose');

// const hotelSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   address: { type: String, required: true },
//   location: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageUrl: [{ type: String }],
//   amenities: [{ type: String }],
// });

// const Hotel = mongoose.model('Hotel', hotelSchema);

// module.exports = Hotel;





const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3, // Minimum name length
    maxlength: 100, // Maximum name length
  },
  description: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true, index: true }, // Adding an index
  price: {
    type: Number,
    required: true,
    min: 0, // Minimum price
  },
  imageUrl: {
    type: [String],
    default: [], // Default to an empty array
  },
  amenities: {
    type: [String],
    default: [], // Default to an empty array
  },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
