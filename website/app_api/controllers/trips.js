const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// GET /api/trips
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

module.exports = {
  tripsList
};
