import express from "express";
import userRouter from "./user.route.js";
import mainRouter from "./main.route.js";
import sessionRouter from "./session.route.js";
import studyRouter from "./study.route.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/main", mainRouter);
router.use("/sessions", sessionRouter);
router.use("/studies", studyRouter);

export default router;
