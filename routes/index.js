const { Router } = require("express");

const postRouter = require("./groups/post.route");
const likeRouter = require("./groups/like.route");
const commentRouter = require("./groups/comment.route");
const profileRouter = require("./groups/profile.route");
const messageRouter = require("./groups/message.route");

const router = new Router();

router.use("/post", postRouter);
router.use("/like", likeRouter);
router.use("/comment", commentRouter);
router.use("/profile", profileRouter);
router.use("/message", messageRouter);

module.exports = router;
