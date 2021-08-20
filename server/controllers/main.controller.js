import { Session } from "../models/index.js";
import { Study } from "../models/index.js";

const test = async (req, res) => {
  const data = {message:"안녕"};
  return res.send(data);
};

export default {
  test,
};
