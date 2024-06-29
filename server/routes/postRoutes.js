const express = require("express");
const Post = require("../models/postModel");

const router = express.Router();

//CREATE A NEW POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

//GET ALL POST
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
