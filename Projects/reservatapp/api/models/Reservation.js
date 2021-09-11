const mongoose = require("mongoose");

let reservationSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});

let Reservation = mongoose.model("Reservation",reservationSchema);

module.exports.model = Reservation
module.exports.Schema = reservationSchema;