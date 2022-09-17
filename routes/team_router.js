const express = require("express");
const router = express.Router();

const {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
} = require("../controllers/team_controller");

router
  .route("/")
  .get((req, res) => {
    res.redirect("team/teams/1");
  })
  .post(createTeam)
  .patch(updateTeamById);

router.route("/teams/:page").get(getAllTeams);

router.route("/:id").get(getTeamById).delete(deleteTeamById);

module.exports = router;
