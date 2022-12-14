const Team = require("../models/Team");

const getPlayers = async (page = 1) => {
  let player = new Array();

  await Team.find({}).then((result) => {
    result.forEach((team) => {
      player = player.concat(team.players);
    });
  });

  player = player.splice(page * 6, (page + 1) * 6);

  return player;
};

// there we send query to database by id of player
// then we get all details about club and player where he is located.
// This query return to as an Json object of team with players
// therefore for getting this player from object we should use filter
// method.
const getSomePlayer = async (id) => {
  return await Team.find({ "players._id": id })
    .then((result) => {
      if (result == "") return "not found";
      const team = result[0].name;
      const players = result[0].players;

      const player = players.filter((x) => x._id == id)[0];
      player["club"] = team;
      return player;
    })
    .catch((err) => err);
};

/*
  two types of searching element in nested array
  first returns team with all players: 
    db.teams.find({"players.fullname": "Thomas Muller"})
  second returns only that player with id of team:
    db.teams.find({"players.fullname": "Thomas Muller"}, {"players.$":1})
*/

const createPlayer = async (club_name, player) => {
  delete player["_id"];
  const team = await Team.updateOne(
    { name: club_name },
    {
      $push: {
        players: player,
      },
    }
  );
  return team;
};

// this method delete player by id
const deletePlayer = async (id) => {
  console.log(id);
  return await Team.updateOne(
    { "players._id": id },
    {
      $pull: {
        players: {
          _id: id,
        },
      },
    }
  );
};

const updatePlayer = async (body) => {
  console.log(body);
  return await Team.findOneAndUpdate(
    { "players._id": body["_id"] },
    {
      $set: {
        "players.$": body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
};

const checkForExists = async (body) => {
  return await Team.find({
    "players.fullname": body["fullname"],
    "players.country": body["country"],
    "players.age": body["age"],
  });
};

const findPlayerByName = async (name) => {
  return await Team.find(
    {
      "players.fullname": {
        $regex: `^${name}`,
        $options: "i",
      },
    },
    {
      "players._id": 1,
      "players.fullname": 1,
      "players.image": 1,
    }
  );
};

const changePlayerTeam = async (player_id, team_name) => {
  const myPlayer = await getSomePlayer(player_id);
  await deletePlayer(player_id);

  myPlayer["club"] = team_name;

  return await createPlayer(team_name, myPlayer);
};

module.exports = {
  getPlayers,
  getSomePlayer,
  createPlayer,
  deletePlayer,
  updatePlayer,
  checkForExists,
  findPlayerByName,
  changePlayerTeam,
};
