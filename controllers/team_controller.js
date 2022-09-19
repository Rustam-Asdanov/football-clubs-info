const path = require("path");

const {
  getTeams,
  getTeam,
  addTeam,
  deleteTeam,
  updateTeam,
} = require("../services/team_service");

const getAllTeams = async (req, res) => {
  const page = req.params.page;
  if (page < 1) {
    page = 1;
  }
  await getTeams(page)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getTeamById = async (req, res) => {
  const id = req.params.id;
  await getTeam(id)
    .then((result) => {
      if (!result || result.length == 0) {
        res
          .status(404)
          .json({ message: `Team with given id: ${id} not found` });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const createTeam = async (req, res) => {
  const body = req.body;
  if (body["_id"] != undefined) {
    delete body["_id"];
  }
  await addTeam(body)
    .then((result) => {
      res.status(201).json({ message: "Team created successfully" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const deleteTeamById = async (req, res) => {
  const id = req.params.id;
  await deleteTeam(id)
    .then((result) => {
      if (!result || result.length == 0) {
        res
          .status(404)
          .json({ message: `Team with given id: ${id} not found` });
      } else {
        res.status(200).json({
          message: `Team deleted successfully`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const updateTeamById = async (req, res) => {
  const body = req.body;
  const id = body["_id"];

  await updateTeam(id, body)
    .then((result) => {
      if (!result || result.length == 0) {
        res
          .status(404)
          .json({ message: `Team with given id: ${id} not found` });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const uploadLogo = (req, res) => {
  const logo = req.files.myLogo;
  if (logo == undefined || logo == "" || logo == null) {
    res.status(500).json({ message: "load the image" });
  } else {
    const logoName = req.body.logoName;
    const directory = path.join(__dirname, "..", "/public/team_logos/");

    logo.mv(directory + logoName);
    res.status(200).json({ message: "logo saved successfully" });
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeamById,
  updateTeamById,
  uploadLogo,
};
