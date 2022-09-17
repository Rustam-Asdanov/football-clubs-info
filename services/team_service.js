const Team = require("../models/Team");

const getTeams = async (page) => {
  return await Team.find({})
    .skip((page - 1) * 5)
    .limit(5);
};

const getTeam = async (id) => {
  return await Team.findById(id);
};

const addTeam = async (body) => {
  return await Team.create(body);
};

const deleteTeam = async (id) => {
  return await Team.findByIdAndDelete({ _id: id });
};

const updateTeam = async (id, body) => {
  return await Team.findByIdAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  });
};

module.exports = {
  getTeams,
  getTeam,
  addTeam,
  deleteTeam,
  updateTeam,
};
