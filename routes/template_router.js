const express = require("express");
const router = express.Router();

const {
  getMainPage,
  getPlayerForm,
  getPlayerBase,
} = require("../controllers/template_controller");

router.route("/").get(getMainPage);
router.route("/main").get(getMainPage);
router.route("/newPlayer").get(getPlayerForm);
router.route("/base").get(getPlayerBase);

module.exports = router;
