const express = require('express');
const socialLinks = require("../database/models/sociallinks")
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")


// Endpoint for creating links 

router.post(
    "/createlinks",[
    ],fetchuser,async (req, res) => {
        let success = false;
      try {
        let linksCount = await socialLinks.find();

        if(linksCount.length >= 1 ){
            return res.status(400).json({success, Error:"links Limit exceeded"});
        }

        const { facebook  , instagram , twitter , github , linkedin , stackoverflow } = req.body;
          let Links = new socialLinks({ facebook , instagram , twitter , github , linkedin , stackoverflow });
            await Links.save();
            success = true ;
            res.status(200).json({success, message:"Links added Successfully"})

      } catch (error) {
        console.error(error.message);
        res.status(500).send({ Error: "Internal Server Error" });
      }
    }
  );

  //Route:2 get Links detail --- login required

router.get("/getlinks",fetchuser,async (req,res)=>{
 let success = false;
    try {
        const links = await socialLinks.find();
        success = true;
        res.status(200).json({success, links})
    
    } catch (error) {
        console.error(error.message);
        success = false;
        res.status(500).send({success,Error:"Internal Server Error"});
    }
    
        
    })

   // ROUTE 3: Update an existing Links
   router.put('/updatelinks/:id',fetchuser ,async (req, res) => {
    const { facebook  , instagram , twitter , github , linkedin , stackoverflow } = req.body;
    try {
        // Create a newLinks object
        const newLinks = {};
        if (facebook) { newLinks.facebook = facebook };
        if (instagram) { newLinks.instagram = instagram };
        if (twitter) { newLinks.twitter = twitter };
        if (github) { newLinks.github = github };
        if (linkedin) { newLinks.linkedin = linkedin };
        if (stackoverflow) { newLinks.stackoverflow = stackoverflow };


  
        // Find the links to be updated and update it
        let links = await socialLinks.findById(req.params.id);
        if (!links) { return res.status(404).send("Not Found") }
  
        links = await socialLinks.findByIdAndUpdate(req.params.id, { $set: newLinks }, { new: true })
        res.json({ links });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  })


module.exports = router;