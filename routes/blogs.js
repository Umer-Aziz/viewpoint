const express = require("express");
const BlogPost = require("../database/models/blogs")
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");

  // ROUTE 1: Get All Blogs
router.get("/",async(req,res)=>{
    const blogs = await BlogPost.find();
    res.json(blogs);  
})
  // ROUTE 2: Get All Latest Blogs
router.get("/latest",async(req,res)=>{
    const blogs =await BlogPost.find({latest:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 3: Get All trending Blogs
router.get("/trending",async(req,res)=>{
    const blogs =await BlogPost.find({trending:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 4: Get All  must reads Blogs
  router.get("/mustreads",async(req,res)=>{
    const blogs =await BlogPost.find({mustreads:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 5: Get All Random Blogs
router.get("/randomposts",async(req,res)=>{
    const blogs =await BlogPost.find({randomposts:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})

  // ROUTE 6: Get All Top picks Blogs
router.get("/toppicks",async(req,res)=>{
    const blogs =await BlogPost.find({toppicks:true}).sort({updatedAt:"desc"}); 
    res.json(blogs);  
})


  // ROUTE 7: filter Blogs by slug
router.get("/:slug",async(req,res)=>{
    const blogs = await BlogPost.findOne({ slug : req.params.slug });
    res.json(blogs)
});

  // ROUTE 8: filter Blogs by  category
router.get("/category/:category",async(req,res)=>{
    const blogs = await BlogPost.find({ category : req.params.category });
    res.json(blogs)
});


  // ROUTE 9: Add Blogs
  router.post(
    "/addblogs",fetchuser,
    async (req, res) => {
      try {
        const { title  , BImg , description , tags, category , latest , trending , mustreads , randomposts , toppicks , content } =req.body;
        const blogData = new BlogPost({title , BImg , tags, description , category , latest , trending , mustreads , randomposts , toppicks , content });
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
    const { title  , BImg , description , tags, category , latest , trending , mustreads , randomposts , toppicks , content } =req.body;
    try {
      // Create a newBlogs object
      const newBlogs = {};
      if (title) { newBlogs.title = title };
      if (BImg) { newBlogs.BImg = BImg };
      if (description) { newBlogs.description = description };
      if (tags) { newBlogs.tags = tags };
      if (category) { newBlogs.category = category };
      if (latest) { newBlogs.latest = latest };
      if (trending) { newBlogs.trending = trending };
      if (mustreads) { newBlogs.mustreads = mustreads };
      if (randomposts) { newBlogs.randomposts = randomposts };
      if (toppicks) { newBlogs.randomposts = toppicks };
      if (content) { newBlogs.content = content };

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
 
  
module.exports = router;