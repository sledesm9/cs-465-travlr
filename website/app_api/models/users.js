const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema
(
    {
        name:
        {
            type: String,
            required: true,
            trim: true
        },
        email:
        {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        passwordHash:
        {
            type: String,
            required: true
        },
        role:
        {
            type: String,
            default: 'admin'
        }
    }
);

mongoose.model('User', UserSchema);