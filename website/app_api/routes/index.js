const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// GET all trips
router.get('/trips', tripsController.tripsList);

// GET single trip by code
router.get('/trips/:tripCode', tripsController.tripsFindCode);

module.exports = router;
