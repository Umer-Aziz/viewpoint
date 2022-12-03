const mongoose = require("mongoose");
const socialLinkSchema = mongoose.Schema({
   
    facebook:{
        type: String,
    },
    instagram:{
        type: String,
    },
    twitter:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    github:{
        type: String,
    },
    stackoverflow:{
        type: String,
    },
   
},{timestamps: true});
    UserSchema.pre("validate",function(next){
    next();
});


module.exports = mongoose.model("SocialLinks",socialLinkSchema);