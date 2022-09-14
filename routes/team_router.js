const express = require("express");
const router = express.Router();

const {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
} = require("../controllers/team_controller");

router.route("/").get(getAllTeams).post(createTeam).patch(updateTeamById);

router.route("/:id").get(getTeamById).delete(deleteTeamById);

module.exports = router;
