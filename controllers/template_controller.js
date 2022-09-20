const { getTeams, getTeam } = require("../services/team_service");

const { getPlayers, getSomePlayer } = require("../services/player_service");

const getMainPage = (req, res) => {
  res.render("index");
};

const getPlayerForm = async (req, res) => {
  let page = req.params.page;
  if (page == undefined) {
    page = 0;
  }

  const myTeams = await getTeams("all_teams")
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });

  const myPlayers = await getPlayers(page)
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });

  if (myPlayers.length == 0) {
    res.status(404).json({ message: "There are no more players." });
  } else {
    res.render("player-form", { teams: myTeams, players: myPlayers });
  }
};

const getTeamBase = async (req, res) => {
  let page = req.params.page;
  if (page == undefined || page < 1) {
    page = 1;
  }
  const myTeams = await getTeams(page)
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });
  if (myTeams.length == 0) {
    res.status(404).json({ message: "There is no club" });
  } else {
    res.render("team-base", { teams: myTeams });
  }
};

const getTeamForm = async (req, res) => {
  const myTeams = await getTeams()
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });
  res.render("team-form", { teams: myTeams });
};

const getTeamInfo = async (req, res) => {
  const id = req.params.id;
  const myTeam = await getTeam(id)
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });
  res.render("team-info", { team: myTeam });
};

const getPlayerPageByName = async (req, res) => {
  const playerId = req.params.playerId;
  if (playerId === 0 || playerId === "") {
    res.status(400).json({ message: "Please select player." });
  }

  const myTeams = await getTeams("all_teams")
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });

  const myPlayer = await getSomePlayer(playerId)
    .then((result) => result)
    .catch((err) => {
      res.status(500).json(err);
    });

  if (myPlayer == "not found") {
    res.redirect("/newPlayer");
  } else {
    res.render("player-form", {
      teams: new Array(),
      players: new Array(myPlayer),
    });
  }
};

module.exports = {
  getMainPage,
  getPlayerForm,
  getTeamBase,
  getTeamForm,
  getTeamInfo,
  getPlayerPageByName,
};
