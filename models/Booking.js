const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    origin: String,
    destination: String,
    departureDate: Date,
    departureTime: String,
    duration: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
