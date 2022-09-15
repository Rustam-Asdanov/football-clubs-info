const express = require("express");
const router = express.Router();

const {
  getMainPage,
  getPlayerForm,
  getPlayerBase,
  getTeamForm,
  getTeamInfo,
} = require("../controllers/template_controller");

router.route("/").get(getMainPage);
router.route("/main").get(getMainPage);
router.route("/newPlayer").get(getPlayerForm);
router.route("/base").get(getPlayerBase);
router.route("/newTeam").get(getTeamForm);
router.route("/moreInfo/:id").get(getTeamInfo);

module.exports = router;
