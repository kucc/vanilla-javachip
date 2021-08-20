// express 설정 파일
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mainRouter from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api", mainRouter);

export default app;
