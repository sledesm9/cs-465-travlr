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

const tripsFindByCode = async (req, res) =>
{
  try
  {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip)
    {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  }
  catch (err)
  {
    res.status(500).json({ message: 'Failed to retrieve trip', error: err });
  }
};

const tripsAddTrip = async (req, res) =>
{
  try
  {
    const trip = await Trip.create(
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });
    res.status(201).json(trip);
  }
  catch (err)
  {
    res.status(400).json({ message: 'Failed to create trip', error: err });
  }
};

const tripsUpdateTrip = async (req, res) =>
{
  try
  {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip)
    {
      return res.status(404).json({ message: 'Trip not found' });
    }
    if (req.body.code !== undefined && req.body.code !== null)
    {
      trip.code = req.body.code;
    }
    if (req.body.name !== undefined && req.body.name !== null)
    {
      trip.name = req.body.name;
    }
    if (req.body.length !== undefined && req.body.length !== null)
    {
      trip.length = req.body.length;
    }
    if (req.body.start !== undefined && req.body.start !== null)
    {
      trip.start = req.body.start;
    }
    if (req.body.resort !== undefined && req.body.resort !== null)
    {
      trip.resort = req.body.resort;
    }
    if (req.body.perPerson !== undefined && req.body.perPerson !== null)
    {
      trip.perPerson = req.body.perPerson;
    }
    if (req.body.image !== undefined && req.body.image !== null)
    {
      trip.image = req.body.image;
    }
    if (req.body.description !== undefined && req.body.description !== null)
    {
      trip.description = req.body.description;
    }
    const saved = await trip.save();
    res.status(200).json(saved);
  }
  catch (err)
  {
    res.status(400).json({ message: 'Failed to update trip', error: err });
  }
};

const tripsDeleteTrip = async (req, res) =>
{
  try
  {
    const result = await Trip.deleteOne({ code: req.params.tripCode }).exec();
    if (result.deletedCount === 0)
    {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(204).send();
  }
  catch (err)
  {
    res.status(500).json({ message: 'Failed to delete trip', error: err });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
