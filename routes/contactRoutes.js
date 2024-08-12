const express = require('express');
const router = express.Router();

const { getContact, getContacts, addContact, updateContact, delContact } = require('../controller/contactsController');



// router.route("/").get(getContacts)

// router.route("/").post(addContact)
router.route("/").get(getContacts).post(addContact);


// router.route("/:id").get(getContact)

// router.route("/:id").put(updateContact)

// router.route("/:id").delete(deleteContact)
router.route("/:id").get(getContact).put(updateContact).delete(delContact);


module.exports = router;