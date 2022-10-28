import jwt from "jsonwebtoken";
import { JWT_Secret } from "../config/config.js";
import { register, login } from "../models/User.js";

export const userRegister = async (req, res) => {
  const { email, password } = req.body;
  register(email, password).then((data) => {
    res.status(data.status).json({ result: data.res, message: data.message });
  });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  login(email, password).then((data) => {
    if (data.status !== 401) {
      const payload = data?.res;
      const token = jwt.sign({ ...payload }, JWT_Secret, { expiresIn: "24h" });
      res
        .status(data.status)
        .json({ result: data.res, token: token, message: data.message });
    } else {
      res.status(data.status).json({ result: data.res, message: data.message });
    }
  });
};
