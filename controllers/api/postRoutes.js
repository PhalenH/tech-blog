const postRoutes = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// url at this point is: /api/posts

postRoutes.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    if (!postData) {
      res.status(400).json("No users found!");
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a post
postRoutes.post("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // why do i need ...req.body? req.body didn't work

    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a post by id
postRoutes.put("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No posts found with this ID!" });
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a post by id
postRoutes.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No posts found with this ID!" });
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = postRoutes;
