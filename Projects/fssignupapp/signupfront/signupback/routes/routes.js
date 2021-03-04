//file responsible for the routes coming to our server
const express = require("express");
const router = express.Router();
const signeduptempcopy = require("../models/SignUpModels");

/*
creating a post request aka when users click sign up or submit on a form 
it means they have sent a post request
.post method:
    Argument 1: Path where the users will make the request on
    Argument 2: Callback function: obv request res
*/ 

router.post('/signup', (req, res) =>{
    //res.send("send")
    var signedUpUser = new signeduptempcopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
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