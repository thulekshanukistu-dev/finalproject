const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  price: {
    type: String,
    enum: ['$', '$$', '$$$', '$$$$'],
    default: '$$',
  },
  categories: [{
    title: String,
  }],
  image_url: {
    type: String,
  },
  location: {
    address1: String,
    city: String,
    country: String,
  },
  phone: String,
  photos: [String],
  reviews: [{
    text: String,
    rating: Number,
    user: String,
    date: { type: Date, default: Date.now }
  }],
  coordinates: {
    latitude: Number,
    longitude: Number,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);