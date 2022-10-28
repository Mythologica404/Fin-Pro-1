import db from "../config/db.js";
import { getUserByID } from "./User.js";

export const addReflection = async (
  owner_id,
  success,
  low_point,
  take_away
) => {
  try {
    const date = new Date();

    const user = await getUserByID(owner_id);
    const query = await db.query(
      `INSERT INTO reflections (owner_id, success, low_point, take_away, created_date, modified_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [owner_id, success, low_point, take_away, date, date]
    );
    const res = query?.rows[0];
    return { status: "success", res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const getAllReflections = async (owner_id) => {
  try {
    const query = await db.query(
      `SELECT * FROM reflections WHERE owner_id = $1`,
      [owner_id]
    );
    const resCount = query?.rowCount;
    const res = query?.rows;
    return { status: "success", count: resCount, res };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const editReflection = async (
  id,
  owner_id,
  success,
  low_point,
  take_away
) => {
  try {
    const check = await db.query(
      `SELECT owner_id FROM reflections WHERE id = $1`,
      [id]
    );

    if (check?.rowCount === 0) {
      return { status: "error", message: "Reflection doesn't exist" };
    }

    if (check?.rows[0].owner_id === owner_id) {
      const date = new Date();
      const query = await db.query(
        `UPDATE reflections SET success = $1, low_point = $2, take_away = $3, modified_date = $4 WHERE id = $5 RETURNING owner_id, success, low_point, take_away, created_date, modified_date;`,
        [success, low_point, take_away, date, id]
      );
      const res = query?.rows[0];
      return { status: "success", res };
    } else {
      return { status: "error", message: "Reflection is not yours" };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export const deleteReflection = async (id, owner_id) => {
  try {
    const check = await db.query(
      `SELECT owner_id FROM reflections WHERE id = $1`,
      [id]
    );
    if (check?.rowCount === 0) {
      return { status: "error", message: "Reflection doesn't exist" };
    }

    if (check?.rows[0].owner_id === owner_id) {
      const query = await db.query(
        `DELETE FROM reflections WHERE id = $1 RETURNING *;`,
        [id]
      );
      const res = query?.rows[0];

      return { status: "success", res };
    } else {
      return { status: "error", message: "Reflection is not yours" };
    }
  } catch (error) {
    return { status: "error", message: error.message };
  }
};