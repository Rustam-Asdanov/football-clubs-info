const {
  getPlayers,
  getSomePlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
} = require("../services/player_service");

const getAllPlayers = (req, res) => {
  res.status(200).json(getPlayers);
};

const getPlayerById = (req, res) => {};

const addPlayer = (req, res) => {
  const body = req.body;
  createPlayer(body);
  res.status(201).json({ message: "success" });
};

const deletePlayerById = (req, res) => {};

const updatePlayerById = (req, res) => {};

module.exports = {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  deletePlayerById,
  updatePlayerById,
};
