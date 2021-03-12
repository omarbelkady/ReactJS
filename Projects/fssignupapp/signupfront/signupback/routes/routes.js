//file responsible for the routes coming to our server
const express = require("express");
const router = express.Router();
const signeduptemp = require("../models/SignUpModels");
const bcrypt = require('bcrypt')

/*
creating a post request aka when users click sign up or submit on a form 
it means they have sent a post request
.post method:
    Argument 1: Path where the users will make the request on
    Argument 2: Callback function: obv request res
*/ 

router.post('/signup', async(req, res) =>{

    //generate a password salt
    var saltPass = await bcrypt.genSalt(10);

    //hashing the password that is in the body of what the user sent
    const securePass = await bcrypt.hash(req.body.password);

    

    //res.send("send")
    var signedUpUser = new signeduptemp({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        //generate the salt for the password
        password: securePass
    })
    //save the data
    signedUpUser.save()
    .then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json(err);
    })
});

module.exports = router