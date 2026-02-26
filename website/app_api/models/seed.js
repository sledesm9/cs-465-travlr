const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// Connect to MongoDB and load Trip model
require('./db');
const Trip = mongoose.model('Trip');
const User = mongoose.model('User');
const seedTrips = async () => {
  try {
    const filePath = path.join(__dirname, '../../data/trips.json');
    const trips = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Clear existing trips
    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    console.log(`Seed complete: inserted ${trips.length} trips`);
  } catch (err) {
    console.error('Seed failed:', err);
    mongoose.connection.close();
    process.exit(1);
  }
};
const seedUser = async () => {
  try {
    await User.deleteMany({ email: 'admin@travlr.com' });
    const passwordHash = await bcrypt.hash('admin123', 10);
    await User.create({
      name: 'Admin',
      email: 'admin@travlr.com',
      passwordHash,
      role: 'admin'
    });
    console.log('Admin seeded: admin@travlr.com / admin123');
    mongoose.connection.close();
  }
  catch (err)
  {
    console.error(err);
    mongoose.connection.close();
    process.exit(1);
  }
};
seedUser();
seedTrips();
