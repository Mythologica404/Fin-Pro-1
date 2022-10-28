import db from "../config/db.js";

await db.query(`DROP TABLE IF EXISTS users CASCADE;`).then((res) => {
  console.log(res);
});

await db.query(`DROP TABLE IF EXISTS reflections CASCADE;`).then((res) => {
  console.log(res);
});

db.end();
