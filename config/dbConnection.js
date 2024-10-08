const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.ConnectionString);
        console.log("Database connected  : ", connect.connection.host, connect.connection.name);
    }catch(e){
        console.log("Error in connecting to mongoDB");
        console.log(e);
        process.exit(1);
    }
};

module.exports = connectDB;