const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.model');

router.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/restaurants', async (req, res) => {
    try {
        const sortOrder = req.query.sortBy === 'ASC' ? 1 : -1;
        const restaurants = await Restaurant.find({}, { restaurant_id: 1, name: 1, cuisine: 1, city: 1 })
            .sort({ restaurant_id: sortOrder });

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: "Delicatessen",  
            city: { $ne: "Brooklyn" }  
        }, { _id: 0, name: 1, city: 1, cuisine: 1 }).sort({ name: 1 });  

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
