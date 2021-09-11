//take all the tables in the JSON file and process them into the MongoDB tables

const mongoose = require("mongoose");
const Table = require("../models/Table").model;

const fs = require("fs");
let tableData = fs.readFileSync(__dirname+"/allTables.json");
tableData = JSON.parse(tableData).tables;

let allTables = [];

tableData.forEach(table => {
    allTables.push(new Table(table));
})

module.exports = allTables