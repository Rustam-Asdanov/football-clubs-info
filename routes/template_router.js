const express = require("express");
const router = express.Router();

const {
  getMainPage,
  getPlayerForm,
  getPlayerBase,
  getTeamForm,
} = require("../controllers/template_controller");

router.route("/").get(getMainPage);
router.route("/main").get(getMainPage);
router.route("/newPlayer").get(getPlayerForm);
router.route("/base").get(getPlayerBase);
router.route("/newTeam").get(getTeamForm);

module.exports = router;
