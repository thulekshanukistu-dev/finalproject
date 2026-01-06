const router = require('express').Router();
let Restaurant = require('../models/Restaurant');

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const { city, category, minRating } = req.query;
    let query = {};

    if (city) {
      query['location.city'] = new RegExp(city, 'i');
    }

    if (category) {
      query['categories.title'] = new RegExp(category, 'i');
    }

    if (minRating) {
      query.rating = { $gte: parseFloat(minRating) };
    }

    const restaurants = await Restaurant.find(query);
    res.json(restaurants);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Get restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json('Restaurant not found');
    }
    res.json(restaurant);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add a new restaurant
router.post('/', async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    res.json('Restaurant added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update restaurant
router.put('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(restaurant);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Delete restaurant
router.delete('/:id', async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json('Restaurant deleted.');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add review to restaurant
router.post('/:id/reviews', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    restaurant.reviews.push(req.body);
    await restaurant.save();
    res.json('Review added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;