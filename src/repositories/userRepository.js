import { connection } from "../database.js";

export async function findByEmail(email) {
  const result = await connection.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);
  if (!result.rowCount) return null;
  return result.rows[0];
}

export async function find(id) {
  const result = await connection.query("SELECT * FROM users WHERE id=$1", [
    id,
  ]);
  if (!result.rowCount) return null;
  return result.rows[0];
}

export async function insert({ name, email, password }) {
 const result = await connection.query(
    `
  INSERT INTO 
    users(name, email, password) 
  VALUES ($1, $2, $3)
`,
    [name, email, password]
  );
  if (!result.rowCount) return false;
  return true;
}
