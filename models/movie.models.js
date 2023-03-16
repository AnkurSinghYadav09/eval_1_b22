const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
    genre: [{ type: String, required: false }],
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

const movies = mongoose.model("movies", movieSchema);

module.exports=movies;
