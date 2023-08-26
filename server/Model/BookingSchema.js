const mongoose = require('mongoose');

const BookingModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    mechanic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mechanics'
    },
    BookingDate: {
        type: String, // Change the type to Date
        required: true
    },
    fees: {
        type: Number
    },
    location: {
        type: String
    },
    phone: {
        type: Number
    },
    landmark: {
        type: String
    },
    unSavedDate: {
        type: Date
    },
    status:{
        type:String,
        default:'pending'
    }
});

const BookingSchema = mongoose.model('bookings', BookingModel);
module.exports = BookingSchema;
