// server 진입점
import dotenv from "dotenv";
import app from "./app.js";
import appConfig from "./config/app.config.js";
import { sequelize, User } from "./models/index.js";

dotenv.config({
  path: `${
    process.env.NODE_ENV === "production" ? ".env" : ".env.development"
  }`,
});

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log(" DB 연결 성공");
    await User.create({
      name: "admin",
      email: "admin",
      password: "admin!",
    });

    app.listen(appConfig.port, () => {
      console.log(`Server is running on port ${appConfig.port}`);
    });
  })
  .catch((err) => {
    console.log("연결 실패");
    console.log(err);
  });
