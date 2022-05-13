import pg from "pg";
import * as config from "../config.js";

const pool = new pg.Pool({
  user: config.dbuser,
  host: config.dbhost,
  database: config.dbdatabase,
  password: config.dbpassword,
  port: config.dbport,
  ssl: { rejectUnauthorized: false },
});

console.log(config.dbuser);

export default function query(text, params) {
  return pool.query(text, params);
}
