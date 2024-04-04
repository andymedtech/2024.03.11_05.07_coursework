const { Router } = require("express");
const messageController = require("../../controllers/Message.controller");

const router = new Router();

router.get("/:fromID", messageController.getFromID);
router.get("/:toID", messageController.getToID);
router.post("/", messageController.create);

module.exports = router;
