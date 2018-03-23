const express = require('express');
const app = express();
require("dotenv").config(); 
const expressJwt = require("express-jwt");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");

mongoose.connect("mongodb://localhost/listings", (err) => {
    if (err) throw err;
    console.log("Connected to the Listings Database");
});

app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use("/api/public/listing", require('./routes/public'));
app.use("/api/listing/", expressJwt({secret: process.env.SECRET}));
app.use("/auth", require("./routes/auth"));
app.use('/listing', require('./routes/routes'));
app.use('/api/upload', require('./routes/routes'));

app.listen(8088, () => {
    console.log("Server is running on port 8088");
})