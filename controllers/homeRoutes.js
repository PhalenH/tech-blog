const router = require('express').Router();
const { Blog, User } = require('../models');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll();
  
      const blogs = blogData.map((blog) =>
        blog.get({ plain: true })
      );
      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  // Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  module.exports = router;