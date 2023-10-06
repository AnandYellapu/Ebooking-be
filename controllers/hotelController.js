const Hotel = require('../models/hotelModel');
const { validationResult } = require('express-validator');

// // Controller function to create a new hotel
// const createHotel = async (req, res) => {
//   try {
//     const { name, description, address, price,location, imageUrl, amenities } = req.body;
//     const newHotel = new Hotel({
//       name,
//       description,
//       address,
//       price,
//       location,
//       imageUrl,
//       amenities,
//     });
//     const savedHotel = await newHotel.save();
//     res.status(201).json(savedHotel);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create hotel' });
//   }
// };





// Controller function to create a new hotel
const createHotel = async (req, res) => {
  // Validate input using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, description, address, price, location, imageUrl, amenities } = req.body;
    const newHotel = new Hotel({
      name,
      description,
      address,
      price,
      location,
      imageUrl,
      amenities,
    });
    const savedHotel = await newHotel.save();
    res.status(201).json({ success: true, data: savedHotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to create hotel' });
  }
};


// Controller function to retrieve all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve hotels' });
  }
};

const getHotelById = async (req, res, next) => {

  const { id } = req.params; 

  try {
    // const hotel = await Hotel.findById(req.params.id);
    const hotel = await Hotel.findById(id);
    
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    
    res.status(200).json({ success: true, data: hotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


const updateHotelById = async (req, res) => {
  try {
    const { name, description, address, price, location, imageUrl, amenities } = req.body;

    // Check if the hotel with the given ID exists
    const existingHotel = await Hotel.findById(req.params.id);

    if (!existingHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    // Update the hotel properties
    existingHotel.name = name;
    existingHotel.description = description;
    existingHotel.address = address;
    existingHotel.price = price;
    existingHotel.location = location;
    existingHotel.imageUrl = imageUrl;
    existingHotel.amenities = amenities;

    // Save the updated hotel
    const updatedHotel = await existingHotel.save();

    res.status(200).json({ success: true, data: updatedHotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update hotel" });
  }
};


const deleteHotelById = async (req, res) => {
  try {
    // Check if the hotel with the given ID exists
    const existingHotel = await Hotel.findById(req.params.id);

    if (!existingHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    // Use the deleteOne method to remove the hotel
    await Hotel.deleteOne({ _id: req.params.id });

    res.status(204).json(); // Return 204 No Content on successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete hotel" });
  }

};

module.exports = {
  createHotel,
  getHotels,
  getHotelById,
  updateHotelById,
  deleteHotelById,
};
