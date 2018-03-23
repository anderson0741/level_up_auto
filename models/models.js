const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    "make": {
        type: String,
        required: true
    },
    "model": {
        type: String,
        required: true
    },
    "year": {
        type: Number,
        required: true
    },
    "miles": {
        type: Number,
        required: true
    },
    "drivetrain": {
        type: String,
        required: true
    },
    "transmission": {
        type: String,
        required: true
    },
    "color": String,
    "doors": String,
    "price": {
        type: Number,
        required: true
    },
    "description": String,
    "photo1": String,
    "photo2": String,
    "photo3": String,
    "photo4": String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
        // required: true
    }
});

module.exports = mongoose.model("Listings", listingSchema);