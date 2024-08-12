const express = require('express');
const dotenv = require('dotenv').config();


const app = express();
PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.jsonp({"NAME" : "Harsh Kumar Singh"});
})


app.listen(PORT, () => {
    console.log(`Listening on port number ${PORT}`);
})