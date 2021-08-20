import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router.route("/login").post(userCtrl.login);
router.route("/signup").post(userCtrl.signup);
router.route("/logout").put(userCtrl.logout);
router
  .route("/:id")
  .get(userCtrl.find)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

export default router;
