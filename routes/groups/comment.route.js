const { Router } = require("express");
const CommentController = require("../../controllers/Comment.controller");

const router = new Router();

router.get("/:postID", CommentController.getByPostID);
router.post("/", CommentController.create);
router.put("/", CommentController.update);
router.delete("/", CommentController.delete);

module.exports = router;
