const express = require('express');
const app = express();
require("dotenv").config(); 
const expressJwt = require("express-jwt");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 8088;
const secret = process.env.SECRET || "Millyswede Lawrence Schnorkavich arche duke"  

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/listings", (err) => {  
    if (err) throw err;
    console.log("Connected to the Listings Database");
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))
// app.use("/api/public/listing", require('./routes/public'));
app.use("/api/listing/", expressJwt({secret: process.env.SECRET}));
app.use("/auth", require("./routes/auth"));
app.use('/listing', require('./routes/routes'));
app.use('/api/upload', require('./routes/routes'));

app.get("*", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})