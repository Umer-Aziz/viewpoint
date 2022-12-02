const mongoose = require("mongoose");
const slugify = require("slugify");
const BlogSchema = mongoose.Schema({
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
     },
    title:{
        type: String,
        required:true
    },
    slug:{
        type: String,
        required:true,
        unique: true
    },
    description:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    content:{
        type: String,
       required:true
    },
},{timestamps: true});

    BlogSchema.pre("validate",function(next){
    if(this.title) {
        this.slug = slugify(this.title, {lower: true ,strict : true});
    }
    next();
})


module.exports = mongoose.model("Blogs",BlogSchema);