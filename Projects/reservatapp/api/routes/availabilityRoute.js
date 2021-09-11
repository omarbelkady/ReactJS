var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

const Day = require("../models/Day").model;

//Route Parameters
/*
{
    date:String("September 10, 2021 22:05")
}
*/



/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Just Made A Request");
  console.log(req.body);

  const dateTime = new Date(req.body.date);

  Day.find({date: dateTime}, (error, docs) => {
    if(!error)
    {
        if(docs.length>0){
          console.log("Record Exists")
          res.status(200).send(docs[0])
        }

        else{
          const allTables = require("../data/allTables");
          const day = new Day({
            date: dateTime,
            tables: allTables
          })

          day.save(error =>{
            if(error){
              res.status(400).send("There is an error saving this record!");
            }

            else{
              //save data and return all the new tables
              console.log("New Data Created");
              Day.find({date: dateTime}, (error, docs)=>{
                  error ? res.sendStatus(400) : res.status(200).send(docs[0])
              });
            }
          });
        }

      }  
        else{
          res.status(400).send("Couldn't find the data")
        }
  });
});

module.exports = router;
