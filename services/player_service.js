const Player = require("../models/Player");

const getPlayers = async () => {
  return await Player.find({});
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
