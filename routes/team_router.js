const express = require("express");
const router = express.Router();

const {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
  addNewPlayer,
} = require("../controllers/team_controller");

router.route("/").get(getAllTeams).post(createTeam);
router
  .route("/:id")
  .get(getTeamById)
  .delete(deleteTeamById)
  .patch(updateTeamById)
  .put(addNewPlayer);

module.exports = router;
