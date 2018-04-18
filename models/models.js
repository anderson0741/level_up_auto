const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new mongoose.Schema({
    "make": {
        type: String,
        required: false
    },
    "model": {
        type: String,
        required: false
    },
    "year": {
        type: Number,
        required: false
    },
    "miles": {
        type: Number,
        required: false
    },
    "drivetrain": {
        type: String,
        required: false
    },
    "transmission": {
        type: String,
        required: false
    },
    "color": String,
    "doors": String,
    "price": {
        type: Number,
        required: false
    },
    "description": String,
    "photo1": String,
    "photo2": String,
    "photo3": String,
    "photo4": String,
    "photo5": String,
    "photo6": String,
    "photo7": String,
    "photo8": String,
    "photo9": String,
    "photo10": String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
        // required: false
    }
});

module.exports = mongoose.model("Listings", listingSchema);