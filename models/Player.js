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
  image: {
    type: String,
    default:
      "https://www.shareicon.net/data/2016/06/30/788946_people_512x512.png",
  },
  rating: {
    pace: Number,
    dribbling: Number,
    shooting: Number,
    defending: Number,
    passing: Number,
    physical: Number,
    overall: Number,
  },
});

const PlayerModel = mongoose.model("Player", PlayerSchema);

module.exports = {
  PlayerSchema,
  PlayerModel,
};
