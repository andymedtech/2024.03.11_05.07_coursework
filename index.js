// Connection to MongoDB from Docker
const fsd_05 = require("./connection");
// Model of collection
const postModel = require("./model/post.model");
const likeModel = require("./model/like.model");
const commentModel = require("./model/comment.model");
const profileModel = require("./model/profile.model");
const messageModel = require("./model/message.model");

// Test posts
(async () => {
  await fsd_05();
  // Make record ro post
  await postModel.create({
    user_id: "user_id post",
    content: "content post",
    timestamp: new Date(),
  });
  //
  // Request all records
  //   const posts = await postModel.find();
  //
  // Request all timestamp from post
  // const posts = await postModel.find();
  // console.log(posts.map((posts) => posts.timestamp));
})();

// Test likes
(async () => {
  await fsd_05();
  await likeModel.create({
    user_id: "user_id like",
    post_id: "post_id like",
    timestamp: new Date(),
  });
})();

// Test comments
(async () => {
  await fsd_05();
  await commentModel.create({
    user_id: "user_id comment",
    post_id: "post_id comment",
    content: "content comment",
    timestamp: new Date(),
  });
})();

// Test profiles
(async () => {
  await fsd_05();
  await profileModel.create({
    name: "name profile",
    surname: "surname profile",
    email: "email profile",
    password: "password profile",
  });
})();

// Test message
(async () => {
  await fsd_05();
  await messageModel.create({
    user_id_from: "user_id_from message",
    user_id_to: "user_id_to message",
    content: "content message",
    timestamp: new Date(),
  });
})();
