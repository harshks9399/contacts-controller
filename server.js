const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();


const app = express();
PORT = process.env.PORT || 5000;

app.use(express.json()); // this is used to parse the incoming request with JSON payloads. IMPORTANT
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`);
})