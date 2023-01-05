const mongoose = require('mongoose');
require('dotenv').config()
const mongoUrl = "mongodb+srv://pointview:TGc7J2VqxlgABDnw@cluster0.ckgrkia.mongodb.net/pointview?retryWrites=true&w=majority";

const ConnectDB =()=>{
    mongoose.connect(mongoUrl , ()=>{
        console.log("Connection Successful")
    })
}

module.exports = ConnectDB;