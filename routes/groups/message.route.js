const { Router } = require("express");
const messageController = require("../../controllers/Message.controller");

const router = new Router();

// router.get("/:user_id_from", messageController.getUserFromID);
// router.get("/:user_id_to", messageController.getUserToID);
router.get("/:user_id_from/:user_id_to", messageController.getDialogue);
router.post("/", messageController.create);

module.exports = router;
