import pg from "pg";
const pool = new pg.Pool({
  user: "fewrgngrccafue",
  host: "ec2-176-34-211-0.eu-west-1.compute.amazonaws.com",
  database: "d7rpbpbuiv7mrc",
  password: "194fb1e4405e4e05d6e7b7929034d49f9991f92aa39c54a60f542c031a7430a0",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
