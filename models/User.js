import db from "../config/db.js";

export const register = async (email, password) => {
  try {
    const query = await db.query(
      `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, password;`,
      [email, password]
    );
    const res = query?.rows[0];
    delete res.password;
    return { status: 201, res };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

export const login = async (email, password) => {
  try {
    const query = await db.query(
      `SELECT id, email, password FROM users WHERE email = $1`,
      [email]
    );

    if (query?.rowCount > 0) {
      const res = query?.rows[0];
      if (password === res.password) {
        delete res.password;
        return { status: 200, res };
      } else {
        return { status: 401, message: "password doens't match" };
      }
    } else {
      return { status: 404, message: "User not Found" };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};
