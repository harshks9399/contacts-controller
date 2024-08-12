const express = require('express');
const dotenv = require('dotenv').config();


const app = express();
PORT = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));


app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`);
})