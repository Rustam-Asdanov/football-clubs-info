const express = require("express");
const app = express();
const connectDB = require("./databases/connection");
const player_route = require("./routes/player_route");
const port = 3000;

require("dotenv").config();

app.use(express.json());

app.use("/api/v1/player", player_route);

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
