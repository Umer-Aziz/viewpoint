var jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtKey = process.env.JWT_key;
const fetchuser = ( req,res,next )=>{

    // get user token from jwt 
    const token = req.header("auth-token");
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
    try {
    const data = jwt.verify(token , jwtKey);
     req.user = data.user;
    next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"});
    }
}

module.exports = fetchuser;