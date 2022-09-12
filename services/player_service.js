const { PlayerModel: Player } = require("../models/Player");

const getPlayers = async () => {
  return await Player.find({});
};

const getSomePlayer = async (id) => {
  return await Player.findById(id);
};

const createPlayer = async (body) => {
  return await Player.create(body);
};

const deletePlayer = async (id) => {
  return await Player.deleteOne({ _id: id });
};

const updatePlayer = async (id, body) => {
  return await Player.findByIdAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  });
};

const checkForExists = async (body) => {
  return await Player.find({
    fullname: body["fullname"],
    age: body["age"],
    country: body["country"],
  });
};

module.exports = {
  getPlayers,
  getSomePlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
  checkForExists,
};
