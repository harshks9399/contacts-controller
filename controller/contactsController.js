const asyncHandler = require("express-async-handler")


const getContacts = asyncHandler (async (req, res) => {
    // res.send("GET all contacts:");
    res.status(200).jsonp({message : "GET all contacts"});
})

const getContact = asyncHandler (async (req, res) => {
    // res.send(`GET contact info for ${id}`);
    res.status(200).jsonp({message : `GET contact info for ${req.params.id}`});
})

const updateContact = asyncHandler (async (req, res) => {
    // res.send(`UPDATE contact for ${id}`);
    res.status(201).jsonp({message : `UPDATE contact for ${req.params.id}`});
})

const addContact = asyncHandler (async (req, res) => {
    // res.send("ADD contact");
    console.log(`The reqwuest body is ` + JSON.stringify(req.body));

    const {name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields as needed");
    }

    res.status(201).jsonp({message : "ADD contact"});
})

const delContact = asyncHandler (async (req,res) => {
    // res.send(`DELETE contact for ${id}`);
    res.status(201).jsonp({message : `DELETE contact for ${req.params.id}`});
})


module.exports = {
    getContact,
    getContacts,
    updateContact,
    addContact,
    delContact
};

// console.log("working fine");