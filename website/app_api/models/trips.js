const mongoose = require('mongoose');

const TripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  length: {
    type: String,
    required: true,
    trim: true
  },
  start: {
    type: Date,
    required: true
  },
  resort: {
    type: String,
    required: true,
    trim: true
  },
  perPerson: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

mongoose.model('Trip', TripSchema);
