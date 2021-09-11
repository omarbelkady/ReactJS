var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const Day = require("../models/Day").model;
const Reservation = require("../models/Reservation").model;

//My Parameters
/* date
table
name
phone
email
*/


router.post("/", function(request, response, next) {
  Day.find({date: request.body.date}, (error, days) => {
    if(!error){
      if(days.length > 0){
        let day = days[0];
        day.tables.forEach(table => {
          if(table._id == request.body.table){
            table.reservation = new Reservation({
              name: request.body.name,
              phone: request.body.phone,
              email: request.body.email
            })
            table.isAvailable = false
            day.save(error => {
              if(error){
                console.log(error);
              }
              else{
                console.log("Reserved The Table!");
                response.status(200).send("Added A Reservation For You");
              }
            })
          }
        })
      } else{
          console.log("Day Not Found!");
      }
    }
  })
});

module.exports = router;
