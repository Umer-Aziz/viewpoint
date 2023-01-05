const mongoose = require('mongoose');
require('dotenv').config()

const ConnectDB =()=>{
    mongoose.connect("mongodb+srv://pointview:TGc7J2VqxlgABDnw@cluster0.ckgrkia.mongodb.net/pointview?retryWrites=true&w=majority" , ()=>{
        console.log("Connection Successful")
    })
}

module.exports = ConnectDB;