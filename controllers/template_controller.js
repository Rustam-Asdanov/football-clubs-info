const { getTeams } = require("../services/team_service");

const getMainPage = (req, res) => {
  res.render("index");
};

const getPlayerForm = async (req, res) => {
  const myTeams = await getTeams()
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });

  res.render("player-form", { teams: myTeams });
};

const getPlayerBase = async (req, res) => {
  const myTeams = await getTeams()
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });
  res.render("team-base", { teams: myTeams });
};

const getTeamForm = async (req, res) => {
  const myTeams = await getTeams()
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });
  res.render("team-form", { teams: myTeams });
};

module.exports = {
  getMainPage,
  getPlayerForm,
  getPlayerBase,
  getTeamForm,
};
