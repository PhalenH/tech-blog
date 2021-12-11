const { Post } = require("../models");

const postData = [
  {
    title: "NFT",
    post_content: "I'd love to get one soon, but we'll see.",
    date_created: 12/12/12,
    user_id: 1
  },
  {
    title: "Crypto",
    post_content: "People invested in doge and thinking they'd make millions but here we are and most are still broke.",
    date_created: 1/12/12,
    user_id: 2
  },
  {
    title: "Bootcamp",
    post_content: "Bootcamps can be tough, but it's fun",
    date_created: 2/12/12,
    user_id: 3
  },
  {
    title: "Web3",
    post_content: "It's the future, while understanding it is tricky, the concept of it also can be intimidating. But with the right teacher and resources it will be an open plaground of what is possible for the future of the internet and really the whole world.",
    date_created: 10/12/12,
    user_id: 4
  },
  {
    title: "Ethereum",
    post_content: "Shit is pricey, debating buying it everyday.",
    date_created: 8/12/12,
    user_id: 1
  },
  {
    title: "Sixers",
    post_content: "Pain, trade ben simmons, this isn't tech related but damn man, like give me SGA or Jaylen Brown and I'd be pumped.",
    date_created: 4/12/12,
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;