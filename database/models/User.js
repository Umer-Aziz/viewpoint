const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
   
    name:{
        type: String,
        required:true
    },
    profilePic:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    phone:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
},{timestamps: true});
    UserSchema.pre("validate",function(next){
    next();
});


module.exports = mongoose.model("User",UserSchema);