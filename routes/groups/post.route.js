const { Router } = require("express");
const PostController = require("../../controllers/Post.controller");

const router = new Router();

router.get("/:id", PostController.getByID);
router.get("/profile/:id", PostController.getByProfileID);
router.post("/", PostController.create);
router.put("/", PostController.update);
router.delete("/", PostController.remove);

module.exports = router;
