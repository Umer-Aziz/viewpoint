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
    BImg:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    tags:{
        type: Array,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    latest:{
        type: Boolean,
        default:false
    },
    trending:{
        type: Boolean,
        default:false
    },
    mustreads:{
        type: Boolean,
        default:false
    },
    randomposts:{
        type: Boolean,
        default:false
    },
    toppicks:{
        type: Boolean,
        default:false
    },
    content:{
        type: String,
       required:true
    },
    status:{
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