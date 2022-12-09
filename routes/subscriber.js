const express = require('express');
const subscriber = require("../database/models/subscriber")
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")


// Endpoint for creating subscriber 

router.post(
    "/",[
    ],async (req, res) => {
        let success = false;
      try {
        
        const { email } = req.body;
          let subs = new subscriber({ email });
            await subs.save();
            success = true ;
            res.status(200).json({success, message:"You have been Subscribe Successfully"})

      } catch (error) {
        console.error(error.message);
        res.status(500).send({ Error: "Internal Server Error" });
      }
    }
  );

  //Route:2 get subscriber detail --- login required

router.get("/getsubscriber",fetchuser,async (req,res)=>{
 let success = false;
    try {
        const subs = await subscriber.find().sort({updatedAt:"desc"});
        success = true;
        res.status(200).json({success, subs})
    
    } catch (error) {
        console.error(error.message);
        success = false;
        res.status(500).send({success,Error:"Internal Server Error"});
    }
        
    })

module.exports = router;