const mongoose = require("mongoose");
const { PlayerSchema: playerSchema } = require("./Player");

const teamSchema = new mongoose.Schema({
  name: String,
  country: String,
  league: String,
  players: [playerSchema],
});

module.exports = mongoose.model("Team", teamSchema);
