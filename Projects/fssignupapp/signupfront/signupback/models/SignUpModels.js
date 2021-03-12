const mongoose = require("mongoose");


//What details I want from the users when they are signing up in our application
const signeduptemp = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    //record to keep track when the user signed up in my application
    date:{
        type: Date,
        default: Date.now
    },
    lovesPolanco:{
        type: Boolean,
        required: true
    }
});

//arg1: name of table arg2: name of the schema
module.exports = mongoose.model('SignUpModels', signeduptemp)

//Goto MongoDB===> Collections===> 