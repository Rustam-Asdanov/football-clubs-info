const express = require("express");
const router = express.Router();
const multer = require("multer");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

const {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
  uploadTeamImage,
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

router.route("/file").post(uploadTeamImage);

module.exports = router;
