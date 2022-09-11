const express = require("express");
const router = express.Router();

const {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  deletePlayerById,
  updatePlayerById,
} = require("../controllers/player_controller");

router.route("/").get(getAllPlayers).post(addPlayer);
router
  .route("/:id")
  .get(getPlayerById)
  .delete(deletePlayerById)
  .patch(updatePlayerById);

module.exports = router;
