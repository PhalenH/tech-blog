const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "me too!",
    date_created: 8 / 12 / 2021,
    user_id: 4,
    post_id: 1,
  },
  {
    comment_content: "It's a scam",
    date_created: 8 / 12 / 2021,
    user_id: 3,
    post_id: 2,
  },
  {
    comment_content: "They are helpful",
    date_created: 8 / 12 / 2021,
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "I like tim ferris's pod about this topic",
    date_created: 8 / 12 / 2021,
    user_id: 1,
    post_id: 4,
  },
  {
    comment_content: "It's is pricey, debating buying it everyday.",
    date_created: 8 / 12 / 2021,
    user_id: 3,
    post_id: 1,
  },
  {
    comment_content: "Forget Ben Simmons, dude is a bum",
    date_created: 8 / 12 / 2021,
    user_id: 2,
    post_id: 6,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
