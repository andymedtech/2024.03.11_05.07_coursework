const { Router } = require("express");
const LikeController = require("../../controllers/Like.controller");

const router = new Router();

router.get("/:postID", LikeController.getByPostID);
router.post("/", LikeController.create);
router.delete("/", LikeController.delete);

module.exports = router;