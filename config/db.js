import { DB } from "./config.js";
import pkg from "pg";

const { Pool } = pkg;
const pool = new Pool({
  user: DB.user,
  host: DB.host,
  database: DB.name,
  password: DB.password,
  port: DB.port,
});

export default pool;
