const express = require("express");
const connection = require("./configs/db");
const moviesController=require("./controllers/movie.controller")
const app = express();

app.use("/movies",moviesController)

app.use(express.json());
const PORT = 8080;

app.listen(PORT, () => {
  try {
    connection();
    console.log("listening " + PORT);
  } catch (error) {
    console.log(error);
  }
});
