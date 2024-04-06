const { Router } = require("express");
const LikeController = require("../../controllers/Like.controller");

const router = new Router();

router.get("/:post_id", LikeController.getByPostID);
router.post("/", LikeController.create);
router.delete("/", LikeController.remove);

module.exports = router;
