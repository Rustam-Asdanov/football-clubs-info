const Player = require("../models/Player");

const getPlayers = async () => {
  await Player.find({})
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSomePlayer = (id) => {};

const createPlayer = async (body) => {
  await Player.create(body)
    .then((player) => {
      console.log(player);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deletePlayer = (id) => {};

const updatePlayer = (id) => {};

module.exports = {
  getPlayers,
  getSomePlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
};
