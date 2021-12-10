const userRoutes = require("express").Router();
const { User } = require("../../models");

// url at this point is: /api/users

// gets all user, test to see if it works
userRoutes.get("/", async (req, res) => {
  try {
    const userData = await userRoutes.findAll();
    if (!userData) {
      res.status(400).json("No users found!");
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create a new user
userRoutes.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.id;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login for existing user
userRoutes.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    // uses instance method to check if password provided matches user password
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    // Once user logs in, set up the sessions variable 'loggedIn' and user's ID
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.id;

      res.status(200).json({
        user: userData,
        message: "Welcome back, you are now logged in!",
      });
    });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout user
userRoutes.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = userRoutes;
