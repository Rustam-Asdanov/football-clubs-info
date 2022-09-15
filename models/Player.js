const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  number: Number,
  fullname: String,
  country: String,
  club: {
    type: String,
    default: "null",
  },
  position: String,
  age: Number,
  image: String,
  card_rating: {
    PACE: Number,
    DRIBBLING: Number,
    SHOOTING: Number,
    DEFENDING: Number,
    PASSING: Number,
    PHYSICAL: Number,
    OVERALL: Number,
  },
});

const PlayerModel = mongoose.model("Player", PlayerSchema);

module.exports = {
  PlayerSchema,
  PlayerModel,
};
