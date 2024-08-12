

const getContacts = (req, res) => {
    res.send("GET all contacts:");
}

const getContact = (req, res) => {
    res.send(`GET contact info for ${id}`);
}

const updateContact = (req, res) => {
    res.send(`UPDATE contact for ${id}`);
}

const addContact = (req, res) => {
    res.send("ADD contact");
}

const delContact = (req,res) => {
    res.send(`DELETE contact for ${id}`);
}


module.exports = {
    getContact,
    getContacts,
    updateContact,
    addContact,
    delContact
};