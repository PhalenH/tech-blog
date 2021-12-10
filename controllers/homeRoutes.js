const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require('../utils/auth')

// GET all post posts for homepage
router.get("/", async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ["user_id"] },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        {
          model: Comment,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
        // I get I need the comments here, but I'm not rendering it right?
      ],
    });

    if (!postData) {
      res.json("No posts created yet");
    }

    const post = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  console.log(req.session);
  try {
    const postData = await Post.findByPk({
      attributes: { exclude: ["user_id"] },
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        {
          model: Comment,
          include: [{ model: User, attributes: { exclude: ["password"] } }],
        },
      ],
    });

    if (!postData) {
      res.status(404).json("No posts found with this ID!");
    }
    const post = postData.get({ plain: true });
      res.render("single-post", {
        ...post,
        loggedIn: req.session.loggedIn,
      });
  } catch {}
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
