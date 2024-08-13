const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactsModel");


const getContacts = asyncHandler (async (req, res) => {
    // res.send("GET all contacts:");
    // res.status(200).jsonp({message : "GET all contacts"});
    const getAllContacts = await Contact.find({}); // passsing empty query to get all the contacts
    res.status(200).json(getAllContacts); 
})

const getContact = asyncHandler (async (req, res) => {
    // res.send(`GET contact info for ${id}`);
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    // res.status(200).jsonp({message : `GET contact info for ${req.params.id}`});
    res.status(200).json(contact);
})

const updateContact = asyncHandler (async (req, res) => {
    // res.send(`UPDATE contact for ${id}`);
    const contactID = req.params.id;
    const contactInfo = await  Contact.findById(contactID);
    if(!contactInfo){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        contactID, // the id of the contact that we want to update
        req.body,  // the data that we want to update
        {
            new : true // this will return the updated data because by default it will return the old data
        }
    )
    res.status(201).jsonp(updatedContact);
})

const addContact = asyncHandler (async (req, res) => {
    // res.send("ADD contact");
    console.log(`The reqwuest body is ` + JSON.stringify(req.body));
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields as needed");
    }
    // first we need to makee the object that we need to save in the database, the whole work can be done my model, we dont have to do anything extra
    const new_contact = await Contact.create({
        name,
        email,
        phone 
    });
    // res.status(201).jsonp({message : "ADD contact"});
    res.status(201).json(new_contact);
})

const delContact = asyncHandler (async (req,res) => {
    // res.send(`DELETE contact for ${id}`);
    // res.status(201).jsonp({message : `DELETE contact for ${req.params.id}`});
    const contactID = req.params.id;
    const contactInfo = await  Contact.findById(contactID);
    if(!contactInfo){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndDelete(contactID); // the method Contact.remove({_id : contactID}) is deprecated
    res.status(201).jsonp({message : `Contact deleted for id = ${contactID}`});
})


module.exports = {
    getContact,
    getContacts,
    updateContact,
    addContact,
    delContact
};

// console.log("working fine");