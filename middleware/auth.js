import { JWT_Secret } from "../config/config.js";
import db from "../config/db.js";
import jwt from "jsonwebtoken";

const authentication = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      res.json({
        status: "error",
        message: "Failed to access this, Your credentials not valid.",
      });
      return;
    }
    const token = authorization.split("Bearer ");
    const decode = jwt.verify(token[1], JWT_Secret);
    delete decode.iat;
    delete decode.exp;

    const user = await db.query(`SELECT id, email FROM users WHERE id = $1`, [
      decode.id,
    ]);

    if (user?.rowCount > 0) {
      req.user = {
        userID: user.rows[0].id,
        email: user.rows[0].email,
      };
      next();
    } else {
      res.json({
        status: "error",
        message: "Authentication failed",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default authentication;
