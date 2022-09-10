const express = require("express");
const route = express.Router();

const {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  deletePlayerById,
  updatePlayerById,
} = require("../controllers/player_controller");

route.route("/").get(getAllPlayers).post(addPlayer);

module.exports = route;
