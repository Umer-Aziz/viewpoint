const mongoose = require("mongoose");
const SubscriberSchema = mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
},{timestamps: true});
SubscriberSchema.pre("validate",function(next){
    next();
});


module.exports = mongoose.model("Subscriber",SubscriberSchema);