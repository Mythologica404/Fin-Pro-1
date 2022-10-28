import jwt from "jsonwebtoken";
import { JWT_Secret } from "../config/config.js";
import { register, login } from "../models/User.js";

export const userRegister = async (req, res) => {
  const { email, password } = req.body;
  register(email, password).then((data) => {
    res.json(data);
  });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  login(email, password).then((data) => {
    if (data.status !== "error") {
      const payload = data?.res;
      const token = jwt.sign({ ...payload }, JWT_Secret, { expiresIn: "24h" });
      res.json({ ...data, token: token });
    } else {
      res.json(data);
    }
  });
};
