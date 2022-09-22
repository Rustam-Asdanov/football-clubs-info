const express = require("express");
const router = express.Router();

const {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  deletePlayerById,
  updatePlayerById,
  searchPlayer,
  transferPlayer,
} = require("../controllers/player_controller");

router.route("/").get(getAllPlayers).post(addPlayer).patch(updatePlayerById);

router.route("/:id").get(getPlayerById).delete(deletePlayerById);

router.route("/search/:playerName").get(searchPlayer);

router.route("/transfer").post(transferPlayer);

module.exports = router;
