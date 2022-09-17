const {
  getPlayers,
  getSomePlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
  checkForExists,
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
  const playerData = req.body;
  const club = playerData["club"];

  if (playerData["image"] == "" || playerData["image"] == null) {
    delete playerData["image"];
  }

  if (playerData["_id"] != undefined) {
    delete playerData["_id"];
  }

  // there we check if this player exists or not and we send to variable
  // canSave following data:
  // false - we can not add new player
  // true - we can add new player
  const canSave = await checkForExists(playerData)
    .then((result) => {
      if (result.length != 0) {
        res
          .status(403)
          .json({ message: "Player with this data already exists" });
        return false;
      }
      return true;
    })
    .catch((err) => console.log(err));

  // there is save method
  if (canSave) {
    await createPlayer(club, playerData)
      .then((result) => {
        if (!result || result.length == 0) {
          res
            .status(404)
            .json({ message: `Team with given name ${club} not found` });
        } else {
          res.status(201).json(result);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
};

const deletePlayerById = async (req, res) => {
  await deletePlayer(req.params.id)
    .then((result) => {
      if (!result || result["deletedCount"] == 0) {
        res.status(404).json({ message: "player with given id not found" });
      } else {
        res.status(200).json({ message: "success" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updatePlayerById = async (req, res) => {
  await updatePlayer(req.body)
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
