const express = require('express');
const User = require("../database/models/User")
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const jwtKey = "umer123";
const fetchuser = require("../middleware/fetchuser")


// Endpoint for creating users 

router.post(
    "/createuser",[
        // user validation
        body('name',"name must be atleat 3 characters").isLength({ min:3 }),
        body('email',"Please Enter a valid Email").isEmail(),
        body('password',"password must be atleat 5 characters").isLength({ min:8 }),
    ],async (req, res) => {

         // if there is any error 
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

      try {
        let user = await User.findOne({ email: req.body.email });
        let UserCount = await User.find();

        if(UserCount.length >= 1 ){
            return res.status(400).json({success, Error:"Users Limit exceeded"});
        }

        if (user) {
        return res.status(400).json({success, Error:"Email is already Registered"});
        }
            const { name  , profilePic , email , phone , password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const SecPassword = await bcrypt.hash(password,salt);
            user = new User({ name , profilePic , email , phone , password: SecPassword });
            await user.save();

            const data = {
                user:{id:user.id}
            }
            const authtoken = jwt.sign(data,jwtKey);
            success = true;
            res.status(200).json({success, authtoken})

      } catch (error) {
        console.error(error.message);
        res.status(500).send({ Error: "Internal Server Error" });
      }
    }
  );

router.post("/admin/login",[
 // user validation
 body('email',"Please Enter a valid Email").isEmail(),
 body('password',"Password can't be blanked").exists(),
]
 ,async(req,res)=>{

       // if there is any error 
   let success = false;

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   //   check weather the user is exit or not 

   const { email , password } = req.body;

   try {
    let user = await User.findOne({ email });
    if(!user){
      success = false;
        return res.status(400).json({success,Error:"Please try to login with correct Credentials"});
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if(!comparePass){
        success = false;
        return res.status(400).json({success,Error:"Please try to login with correct Credentials"});
    }

    let data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data, jwtKey , {
      expiresIn:"1h"
  });
    success = true;
    res.status(200).json({ success , authtoken});
    
} catch (error) {
    console.error(error.message);
    res.status(500).send({Error:"Internal Server Error"});
}


})


//Route:3 get user detail --- login required

router.post("/getuser",fetchuser,async (req,res)=>{

  try {
     let userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
  
  } catch (error) {
      console.error(error.message);
      res.status(500).send({Error:"Internal Server Error"});
  }
  
      
  })


   // ROUTE 4: Update an existing User
router.put('/updateuser/:id',fetchuser ,async (req, res) => {
    const { name  , profilePic , email , phone , password } =req.body;
    try {
        // Create a newUser object
        const newUser = {};
        if (name) { newUser.name = name };
        if (profilePic) { newUser.profilePic = profilePic };
        if (email) { newUser.email = email };
        if (phone) { newUser.phone = phone };

        if (password) { 
        const salt = await bcrypt.genSalt(10);
        const SecPassword = await bcrypt.hash(password,salt);
            newUser.password = SecPassword
         };
  
        // Find the blogs to be updated and update it
        let users = await User.findById(req.params.id);
        if (!users) { return res.status(404).send("Not Found") }
  
        users = await User.findByIdAndUpdate(req.params.id, { $set: newUser }, { new: true })
        res.json({ users });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  })

module.exports = router;