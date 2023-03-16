const express = require("express");
const movies = require("../models/movie.models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const Movies=await movies.find();
    return res.status(200).send(Movies);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.post("/", async (req, res) => {
    try {
        const Movies=await movies.create(req.body);
      return res.status(200).send(Movies);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      return res.status(200).send("hello world");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.patch("/:id", async (req, res) => {
    try {
      return res.status(200).send("hello world");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      return res.status(200).send("hello world");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  module.exports=router;
