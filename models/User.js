import db from "../config/db.js";

export const register = async (email, password) => {
  try {
    const query = await db.query(
      `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, password;`,
      [email, password]
    );
    const res = query?.rows[0];
    delete res.password;
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
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
        return { status: "success", res };
      } else {
        return { status: "error", message: "password doens't match" };
      }
    } else {
      return { status: "error", message: "user not found" };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getUserByID = async (id) => {
  try {
    const query = db.query(`SELECT id, email FROM users WHERE id = $1`, [id]);
    if (query?.rowCount > 0) {
      const res = query?.rows[0];
      return { id: res.id, email: res.email };
    } else {
      return { status: "error", message: "user doesn't exist" };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
