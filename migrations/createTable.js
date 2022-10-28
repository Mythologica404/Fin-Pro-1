import db from "../config/db.js";

await db.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`).then((res) => {
  console.log(res);
});

await db
  .query(
    `CREATE TABLE IF NOT EXISTS users
(
    id        uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    email     VARCHAR ( 255 ) UNIQUE NOT NULL,
    password  VARCHAR ( 255 ) NOT NULL
);`
  )
  .then((res) => {
    console.log(res);
  });

await db
  .query(
    `CREATE TABLE IF NOT EXISTS reflections
(
    id            serial PRIMARY KEY,
    success       VARCHAR ( 255 ) NOT NULL,
    low_point     VARCHAR ( 255 ) NOT NULL,
    take_away     VARCHAR ( 255 ) NOT NULL,
    owner_id      uuid NOT NULL,
    created_date  TIMESTAMP NOT NULL,
    modified_date TIMESTAMP NOT NULL, 
    CONSTRAINT fk_user FOREIGN KEY(owner_id) references users(id) ON DELETE 
    CASCADE ON UPDATE RESTRICT
);`
  )
  .then((res) => {
    console.log(res);
  });

db.end();
