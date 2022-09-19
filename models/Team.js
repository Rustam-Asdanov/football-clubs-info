const mongoose = require("mongoose");
const { PlayerSchema: playerSchema } = require("./Player");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "My team",
  },
  country: {
    type: String,
    default: "Mars",
  },
  league: {
    type: String,
    default: "Other",
  },
  coach: {
    type: String,
    default: "empty",
  },
  balance: {
    type: String,
    default: "1000000$",
  },
  logo: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/football-logo-design_680400-15.jpg?w=2000",
  },
  players: [playerSchema],
});

module.exports = mongoose.model("Team", teamSchema);
