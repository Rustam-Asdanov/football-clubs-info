const mongoose = require("mongoose");
const { PlayerSchema: playerSchema } = require("./Player");

const teamSchema = new mongoose.Schema({
  name: String,
  country: String,
  league: String,
  coach: String,
  balance: String,
  players: [playerSchema],
});

module.exports = mongoose.model("Team", teamSchema);
