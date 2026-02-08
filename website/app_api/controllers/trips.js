const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips  (all trips)
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve trips',
      error: err
    });
  }
};

// GET /api/trips/:tripCode  (single trip by code)
const tripsFindCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({
      message: 'Failed to retrieve trip',
      error: err
    });
  }
};

module.exports = {
  tripsList,
  tripsFindCode
};
