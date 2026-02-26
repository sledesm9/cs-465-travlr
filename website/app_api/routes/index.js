const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const authController = require('../controllers/auth');
const { requireAuth } = require('../controllers/auth-mw');

router.post('/login', authController.login);
// GET /api/trips
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);
router.post('/trips', requireAuth, tripsController.tripsAddTrip);
router.put('/trips/:tripCode', requireAuth, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', requireAuth, tripsController.tripsDeleteTrip);

module.exports = router;