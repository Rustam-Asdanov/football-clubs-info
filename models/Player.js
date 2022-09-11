const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  number: Number,
  fullname: String,
  country: String,
  club: String,
  position: String,
  age: Number,
});

module.exports = mongoose.model("Player", playerSchema);
