const express = require("express");
const router = express.Router();

const {
  getMainPage,
  getPlayerForm,
  getTeamBase,
  getTeamForm,
  getTeamInfo,
  getPlayerPageByName,
} = require("../controllers/template_controller");

router.route("/").get(getMainPage);
router.route("/main").get(getMainPage);

router.route("/newPlayer").get(getPlayerForm);
router.route("/newPlayer/:page").get(getPlayerForm);
router.route("/newPlayer/search/:playerId").get(getPlayerPageByName);

router.route("/base").get(getTeamBase);
router.route("/base/:page").get(getTeamBase);
router.route("/moreInfo/:id").get(getTeamInfo);

router.route("/newTeam").get(getTeamForm);

module.exports = router;
