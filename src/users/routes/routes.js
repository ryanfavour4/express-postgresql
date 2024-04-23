const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();

console.log(controller.getUsers, "===");
router.get("/", controller.getUsers);

router.post("/", controller.addUser);

router.get("/:id", controller.getUserById);

module.exports = router;
