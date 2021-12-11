const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "me too!",
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: "It's a scam",
    user_id: 3,
    post_id: 2
  },
  {
    comment_content: "They are helpful",
    user_id: 2,
    post_id: 3
  },
  {
    comment_content: "I like tim ferris's pod about this topic",
    user_id: 1,
    post_id: 4
  },
  {
    comment_content: "Shit is pricey, debating buying it everyday.",
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: "Fuck ben simmons",
    user_id: 2,
    post_id: 6
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;