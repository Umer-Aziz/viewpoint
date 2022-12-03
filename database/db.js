const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/pointview";

const ConnectDB =()=>{
    mongoose.connect(mongoUrl , ()=>{
        console.log("Connection Successful")
    })
}

module.exports = ConnectDB;