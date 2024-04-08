const { Router } = require("express");
const profileController = require("../../controllers/Profile.controller");

const router = new Router();

router.post("/auth", profileController.auth); // authorization
router.get("/", profileController.getAll);
router.get("/:id", profileController.getByID);
router.get("/short/:id", profileController.getShortByID);
router.post("/", profileController.create);
router.put("/", profileController.update);
router.delete("/", profileController.remove);

module.exports = router;
