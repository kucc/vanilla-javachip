import express from "express";
import sessionCtrl from "../controllers/session.controller.js";

const router = express.Router();

router.route("/").post(sessionCtrl.test);

export default router;
