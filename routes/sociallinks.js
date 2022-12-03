const express = require('express');
const socialLinks = require("../database/models/sociallinks")
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwtKey = "umer123";
const fetchuser = require("../middleware/fetchuser")


// Endpoint for creating users 

router.post(
    "/createlinks",[
        // user validation
        body('facebook',"name must be atleast 5 characters").isLength({ min:5 }),
        body('instagram',"name must be atleast 5 characters").isLength({ min:5 }),
        body('twitter',"name must be atleast 5 characters").isLength({ min:5 }),
        body('github',"name must be atleast 5 characters").isLength({ min:5 }),
        body('linkedin',"name must be atleast 5 characters").isLength({ min:5 }),
        body('stackoverflow',"name must be atleast 5 characters").isLength({ min:5 }),
    ],fetchuser,async (req, res) => {

         // if there is any error 
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

      try {

            const { facebook  , instagram , twitter , github , linkedin , stackoverflow } = req.body;
            socialLinks = new socialLinks({ facebook , instagram , twitter , github , linkedin , stackoverflow });
            await socialLinks.save();
             success = true ;
            res.status(200).json({success, message:"Links added Successfully"})

      } catch (error) {
        console.error(error.message);
        res.status(500).send({ Error: "Internal Server Error" });
      }
    }
  );


module.exports = router;