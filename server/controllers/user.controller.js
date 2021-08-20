import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import config from "../config/app.config.js";

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email } })
    if (!user) {
      return res.status(422).send(`${email} 사용자가 존재하지 않습니다.`);
    } else {
      const passworMatch = await user.comparePassword(password);
      if (passworMatch) {
        const token = jwt.sign({ userID: user.id }, config.jwtSecret, {
          expiresIn: config.jwtExpires,
        });
        res.cookie(config.cookieName, token, {
          path: "/",
          httpOnly: true,
          secure: true,
        });
        res.json(user);
      } else {
        res.status(401).send("비밀번호가 일치하지 않습니다.");
      }
    }
  } catch (error) {
    return res.status(500).send('로그인 중 에러')
  }
};

const signup = async (req, res) => {
  console.log('sign up= ', req.body)
  const { name, email, password, link, comment } = req.body
  try {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(422).send(`${email} 이미 존재하는 사용자입니다.`);
    } else {
      const newUser = await User.create({name, email, password, link, comment})
      return res.json(newUser);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("회원가입 중 에러");
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.send("Logout Successful");
};

export default {
  login,
  signup,
  logout,
};
