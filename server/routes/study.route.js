import express from "express";
import studyCtrl from "../controllers/study.controller.js";

const router = express.Router();

router.route("/").post(studyCtrl.test);

export default router;
