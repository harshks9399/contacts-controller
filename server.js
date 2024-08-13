const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const connectDB = require('./config/dbConnection');


connectDB();   // connecting to database
const app = express(); // creating an instance of express
PORT = process.env.PORT || 5000; // setting the port number

app.use(express.json()); // this is used to parse the incoming request with JSON payloads. IMPORTANT
app.use("/api/contacts", require("./routes/contactRoutes"));  // this is used to route the incoming request to the contacts route
app.use(errorHandler) // this is used to handle the error

app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`);
})