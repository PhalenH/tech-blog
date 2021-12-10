const commentRoutes = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// url at this point is: /api/comments

commentRoutes.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    if (!commentData) {
      res.status(400).json("No users found!");
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a comment
commentRoutes.post("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });
    // why do i need ...req.body? req.body doesn't work

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a comment
commentRoutes.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comments found with this ID!" });
    }
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a comment

module.exports = commentRoutes;
