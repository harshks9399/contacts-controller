

const getContacts = (req, res) => {
    // res.send("GET all contacts:");
    res.status(200).jsonp({message : "GET all contacts"});
}

const getContact = (req, res) => {
    // res.send(`GET contact info for ${id}`);
    res.status(200).jsonp({message : `GET contact info for ${req.params.id}`});
}

const updateContact = (req, res) => {
    // res.send(`UPDATE contact for ${id}`);
    res.status(201).jsonp({message : `UPDATE contact for ${req.params.id}`});
}

const addContact = (req, res) => {
    // res.send("ADD contact");
    res.status(201).jsonp({message : "ADD contact"});
}

const delContact = (req,res) => {
    // res.send(`DELETE contact for ${id}`);
    res.status(201).jsonp({message : `DELETE contact for ${req.params.id}`});
}


module.exports = {
    getContact,
    getContacts,
    updateContact,
    addContact,
    delContact
};

// console.log("working fine");