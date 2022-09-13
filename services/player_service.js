const Team = require("../models/Team");

const getPlayers = async () => {
  let player = new Array();

  await Team.find({}).then((result) => {
    result.forEach((team) => {
      player = player.concat(team.players);
    });
  });

  console.log(player);

  return player;
};

const getSomePlayer = async (id) => {
  let player = "";

  await Team.find({ "players._id": id }).then((result) => {
    const team = result[0].name;
    const players = result[0].players;

    const player = players.filter(
      (x) => x._id === ObjectID("632076912b3ed5ac112f7ab4")
    );
    console.log(player);
  });

  return player;
};

// db.teams.find({"players.fullname": "Thomas Muller"}, {"players.$":1})

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
