const mongoose = require('mongoose');
require('dotenv').config()
const mongoUrl = process.env.DB_URL;

const ConnectDB =()=>{
    mongoose.connect(mongoUrl , ()=>{
        console.log("Connection Successful")
    })
}

module.exports = ConnectDB;