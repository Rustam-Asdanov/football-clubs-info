const {
  getPlayers,
  getSomePlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
} = require("../services/player_service");

const getAllPlayers = async (req, res) => {
  await getPlayers()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
