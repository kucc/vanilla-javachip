import express from "express";
import mainCtrl from "../controllers/main.controller.js";

const router = express.Router();

router.route("/").get(mainCtrl.findSessions,mainCtrl.findStudies,mainCtrl.sendClasses);
router.route("/sessions").get(mainCtrl.findSessions,mainCtrl.sendClasses);
router.route("/studies").get(mainCtrl.findStudies,mainCtrl.sendClasses);

export default router;
