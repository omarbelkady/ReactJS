require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const mongoose = require("mongoose");

//connecting to MongoDb
mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

var db = mongoose.connection

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));


db.on("error", console.error.bind(console, "connection Error"));

db.once("open", _ => { 
    console.log("Successful Connection To The DB");
});

module.exports = app;
