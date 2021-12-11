const { User } = require("../models");

const userData = [
  {
    username: "DarylM",
    password: "abc123",
  },
  {
    username: "ProcessJoel",
    password: "abc123",
  },
  {
    username: "CantShootBen",
    password: "abc123",
  },
  {
    username: "TheMiniVan",
    password: "abc123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
