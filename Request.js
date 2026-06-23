const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  patientName:String,
  bloodGroup:String,
  units:Number
});

module.exports = mongoose.model("Request", requestSchema);
