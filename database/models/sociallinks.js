const mongoose = require("mongoose");
const socialLinkSchema = mongoose.Schema({
   
    facebook:{
        type: String,
        unique:true
    },
    instagram:{
        type: String,
        unique:true
    },
    twitter:{
        type: String,
        unique:true
    },
    linkedin:{
        type: String,
        unique:true
    },
    github:{
        type: String,
        unique:true
    },
    stackoverflow:{
        type: String,
        unique:true
    },
   
},{timestamps: true});
socialLinkSchema.pre("validate",function(next){
    next();
});


module.exports = mongoose.model("SocialLinks",socialLinkSchema);