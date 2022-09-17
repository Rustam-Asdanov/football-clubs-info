const express = require("express");
const app = express();
const connectDB = require("./databases/connection");
const player_router = require("./routes/player_router");
const template_router = require("./routes/template_router");
const team_router = require("./routes/team_router");
const notFound = require("./middleware/not-found");
const port = 3000;

// configuration
require("dotenv").config();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.use("/", template_router);

app.use("/api/v1/player", player_router);

app.use("/api/v1/team", team_router);

app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
