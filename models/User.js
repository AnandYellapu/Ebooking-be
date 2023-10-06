// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   // email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['user', 'admin'], default: 'admin' },
// });


// const User = mongoose.model('User', userSchema);

// module.exports = User;




// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // role: { type: String, enum: ['user', 'admin'], default: 'admin' },
  isAdmin: {
    type: Boolean,
    default: false, // Assuming new users are not admin by default
  },
});

module.exports = mongoose.model('User', userSchema);

