import { Sequelize } from "sequelize";
import UserModel from "./user.model.js";
import SessionModel from "./session.model.js";
import StudyModel from "./study.model.js";
import AttendanceModel from "./attendance.model.js";
import configs from "../config/config.js";

const env = process.env.NODE_ENV || "development";
const config = configs[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.dialect }
);

const User = UserModel(sequelize);
const Session = SessionModel(sequelize);
const Study = StudyModel(sequelize);
const Attendance = AttendanceModel(sequelize);

export { sequelize, User, Session, Study, Attendance };
