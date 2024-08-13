const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    //takes JSON as parameter
    {
        name :{
            type : String,
            required :[true, "Name of the person: Required"],
        },
        email : {
            type : String,
            required : [true, "Email of the person: Required"],
        },
        phone : {
            type : String,
            required : [true, "Phone number of the person: Required"],
        }
    },
    {
        timestamps : true, // this will create a timestamp for the creation and updation of the document
    }
)

const Contact = mongoose.model("Contact", contactSchema); // this will create a model named Contact with the schema contactSchema
module.exports = Contact; // this will export the model Contact

//why do we need to make Contact model, why cant we just export schema?
//because we need to perform operations on the data, and for that we need to create a model