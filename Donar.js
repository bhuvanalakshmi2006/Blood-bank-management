const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name:String,
  bloodGroup:String,
  mobile:String
});

module.exports = mongoose.model("Donor", donorSchema);
