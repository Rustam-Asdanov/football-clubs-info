const getMainPage = (req, res) => {
  res.render("index");
};

const getPlayerForm = (req, res) => {
  res.render("player-form");
};

const getPlayerBase = (req, res) => {
  res.render("player-base");
};

module.exports = {
  getMainPage,
  getPlayerForm,
  getPlayerBase,
};
