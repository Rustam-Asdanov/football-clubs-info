const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({});

module.exports = mongoose.model("Player", playerSchema);
