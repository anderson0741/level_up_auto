const express = require('express');
const listingRoutes = express.Router();
const Listings = require('../models/models');

listingRoutes.get('/', (req, res) => {
    Listings.find({}, (err, listingz) => {
        if(err) return res.status(500).send(err);
        return res.send(listingz);
    })
});

listingRoutes.get('/:id', (req, res) => {
    Listings.findById(req.params.id, (err, listing) => {
        if (err) return res.status(500).send(err);
        return res.send(listing);
    })
});