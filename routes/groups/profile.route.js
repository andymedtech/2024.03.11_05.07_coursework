const { Router } = require("express");
const profileController = require("../../controllers/Profile.controller");
const validateAuth = require("../../middlewares/auth/auth.middleware"); // check authorization

const router = new Router();

router.post("/auth", profileController.auth); // authorization
router.get("/", validateAuth, profileController.getAll);
router.get("/:id", validateAuth, profileController.getByID);
router.get("/short/:id", validateAuth, profileController.getShortByID);
router.post("/", profileController.create);
router.put("/", validateAuth, profileController.update);
router.delete("/", validateAuth, profileController.remove);

module.exports = router;
