import { response } from "express";
import { Session } from "../models/index.js";
import { Study } from "../models/index.js";

const findSessions = async (req, res, next) => {
  try {
    req.sessions = [];
    req.sessions = await Session.findAll({attributes:["id","title","leader","difficulty","credit"]});
    req.sessions.each(async ())
    next();
  } catch (error) {
    return res.status(500).send("세션 정보 가져오기 중 에러");
  }
};
const findStudies = async (req, res, next) => {
  try {
    req.studies = [];
    req.studies = await Study.findAll({attributes:["id","title","leader"]});

    next();
  } catch (error) {
    return res.status(500).send("스터디 정보 가져오기 중 에러");
  }
};
const sendClasses = async (req, res) => {
  const classes = [...req.sessions, ...req.studies];
  return res.send({ classes: classes });
};

export default {
  findSessions,
  findStudies,
  sendClasses,
};
