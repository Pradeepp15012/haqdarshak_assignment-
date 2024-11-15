import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "Pra12345",
  host: "localhost",
  port: 5432,
  database: "haqsarshak",
});

export default pool;
