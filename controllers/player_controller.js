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
      res.status(500).json(err);
    });
};

const getPlayerById = async (req, res) => {
  await getSomePlayer(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const addPlayer = async (req, res) => {
  const body = req.body;
  await createPlayer(body)
    .then((player) => {
      res.status(201).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deletePlayerById = async (req, res) => {
  await deletePlayer(req.params.id)
    .then((result) => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updatePlayerById = async (req, res) => {
  await updatePlayer(req.params.id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: `No task with id: ${taskID}` });
      } else {
        res.status(200).json({ message: "success" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  deletePlayerById,
  updatePlayerById,
};
