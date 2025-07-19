const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // phone: { type: String, required: true },
  role: { type: String, required: true, default: 'customer' },
  status: { type: String, required: true, default: 'active' },
  age: Number,
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;