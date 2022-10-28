import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const JWT_Secret = process.env.JWT_Secret;

export { PORT, DB, JWT_Secret };
