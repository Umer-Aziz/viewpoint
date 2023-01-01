const express = require("express");
const BlogPost = require("../database/models/blogs")
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const slugify = require("slugify");

  // ROUTE 1: Get All Blogs
router.get("/",async(req,res)=>{
    const blogs = await BlogPost.find().sort({updatedAt:"desc"});
    res.json(blogs);  
})

router.get("/published",async(req,res)=>{
    const blogs = await BlogPost.find({status:"published"}).sort({updatedAt:"desc"});
    res.json(blogs);  
})
router.get("/pending",async(req,res)=>{
    const blogs = await BlogPost.find({status:"pending"}).sort({updatedAt:"desc"});
    res.json(blogs);  
})
  // ROUTE 2: Get All Latest Blogs
router.get("/latest",async(req,res)=>{
    const blogs =await BlogPost.find({status:"published",latest:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 3: Get All trending Blogs
router.get("/trending",async(req,res)=>{
    const blogs =await BlogPost.find({status:"published",trending:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 4: Get All  must reads Blogs
  router.get("/mustreads",async(req,res)=>{
    const blogs =await BlogPost.find({status:"published",mustreads:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 5: Get All Random Blogs
router.get("/randomposts",async(req,res)=>{
    const blogs =await BlogPost.find({status:"published",randomposts:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 6: Get All Top picks Blogs
router.get("/toppicks",async(req,res)=>{
    const blogs =await BlogPost.find({status:"published",toppicks:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE : Filter Next Post
  router.get("/next/:id",async(req,res)=>{
    let success = false
    try{
      let curId = req.params.id
      const blogs = await BlogPost.findOne({status:"published", _id: {$gt: curId}}).sort({_id: 1}); 
       if (!blogs) {
        success = false
         return res.status(404).json({success ,message:"Not Found"}) 
        }
      success = true;
      res.json({success,blogs});
  } catch (error) {
   console.log(error.message);
   res.status(500).send("Internal Server Error!");
  }
    
})

  // ROUTE : Filter Previous Post
  router.get("/previous/:id",async(req,res)=>{
    let success = false
    try{
      let curId = req.params.id
      const blogs = await BlogPost.findOne({status:"published", _id: {$lt: curId}}).sort({_id: -1}); 
      if (!blogs) {
        success = false
         return res.status(404).json({success ,message:"Not Found"}) 
        }
      success = true;
      res.json({success,blogs});
  } catch (error) {
   console.log(error.message);
   res.status(500).send("Internal Server Error!");
  } 
})


  // ROUTE 7: filter Blogs by slug
router.get("/slug/:slug",async(req,res)=>{
    const blogs = await BlogPost.findOne({ slug : req.params.slug });
    res.json(blogs)
});

  // ROUTE 8: filter Blogs by  category
router.get("/category/:category",async(req,res)=>{
    const blogs = await BlogPost.find({ category : req.params.category });
    res.json(blogs)
});


  // ROUTE 9: Add Blogs
  router.post("/addblogs",fetchuser,
    async (req, res) => {
      try {
        const { title , BImg , description , tags, category , latest , trending , mustreads , randomposts , toppicks , content , status } =req.body;
        const blogData = new BlogPost({title , BImg , tags, description , category , latest , trending , mustreads , randomposts , toppicks , content , status });
        const saveBlogs = await blogData.save();
        res.json(saveBlogs);
      } catch (error) {
        console.error(error.message);
        res.status(500).send({ Error: "Internal Server Error" });
      }
    }
  );

  // ROUTE 10: Update an existing Blogs
router.put('/updateblogs/:id',fetchuser ,async (req, res) => {
    const { title  , BImg , description , tags, category , latest , trending , mustreads , randomposts , toppicks , content ,status } =req.body;
    try {
      // Create a newBlogs object
      const newBlogs = {};
      if (title) {
         newBlogs.title = title
         newBlogs.slug = slugify(title, {lower: true ,strict : true});
         };
      if (BImg) { newBlogs.BImg = BImg };
      if (description) { newBlogs.description = description };
      if (tags) { newBlogs.tags = tags };
      if (category) { newBlogs.category = category };
      if (latest) { newBlogs.latest = latest };
      if (trending) { newBlogs.trending = trending };
      if (mustreads) { newBlogs.mustreads = mustreads };
      if (randomposts) { newBlogs.randomposts = randomposts };
      if (toppicks) { newBlogs.toppicks = toppicks };
      if (content) { newBlogs.content = content };
      if (status) { newBlogs.status = status };

      // Find the blogs to be updated and update it
      let blogs = await BlogPost.findById(req.params.id);
      if (!blogs) { return res.status(404).send("Not Found") }

      blogs = await BlogPost.findByIdAndUpdate(req.params.id, { $set: newBlogs }, { new: true })
      res.json({ blogs });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

//Route:11 DELETE ROUTE 
router.delete("/delete/:id",fetchuser,async(req,res)=>{
    try {
     let blogs = await BlogPost.findById(req.params.id);
     if(!blogs) { return res.status(400).send("Not Found")};
 
     blogs = await BlogPost.findByIdAndDelete(req.params.id);
     res.json({success:"Blog has been deleted successfully!"});
    } catch (error) {
     console.log("Error in Deleting Blog post ",error.message);
     res.status(500).send("Internal Server Error!");
    }
 });


 //Route:12 SEARCH filter ROUTE 

router.get("/search",async(req,res)=>{
     try {
         const searchField = req.query.title;
         let filterBlogs = await BlogPost.find({title:{$regex: searchField , $options:"i"}});
         if(!filterBlogs) { return res.status(400).send("No Result Found")};
         let success = true;
         res.status(200).json({success,filterBlogs});

     } catch (error) {
      console.log("Error in Filter blogs  ",error.message);
     res.status(500).send("Internal Server Error!");
     }
    
})


// Route:13 Pagination Api 

router.get("/pagination",async(req,res)=>{
 try {

  let { page , limit } = req.query ;
  if(!page) { page = 1 };
  if(!limit) { limit = 9 };

  const skip = ( page - 1 ) * 9 ;
  const blogs = await BlogPost.find().sort({updatedAt : "desc"}).skip(skip).limit(limit);
  res.send({page:page , limit:limit ,blogs:blogs})
  
 }catch (error) {
  console.log("Error in pagination blogs  ",error.message);
 res.status(500).send("Internal Server Error!");
 }
})



 
  
module.exports = router;