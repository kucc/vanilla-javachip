import express from "express";
import mainCtrl from "../controllers/main.controller.js";

const router = express.Router();

router.route("/").get(mainCtrl.test);

export default router;
