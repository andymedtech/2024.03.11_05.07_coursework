const { Router } = require("express");
const CommentController = require("../../controllers/Comment.controller");

const router = new Router();

router.get("/:post_id", CommentController.getByPostID);
router.post("/", CommentController.create);
router.put("/", CommentController.update);
router.delete("/", CommentController.remove);

module.exports = router;
