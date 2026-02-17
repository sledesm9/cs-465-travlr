const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Connect to MongoDB and load Trip model
require('./db');
const Trip = mongoose.model('Trip');

const seedTrips = async () => {
  try {
    const filePath = path.join(__dirname, '../../data/trips.json');
    const trips = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Clear existing trips
    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    console.log(`Seed complete: inserted ${trips.length} trips`);
    mongoose.connection.close();
  } catch (err) {
    console.error('Seed failed:', err);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedTrips();
