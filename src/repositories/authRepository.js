import { connection } from "../database.js";

export async function findByToken(token) {
  const result = await connection.query(
    `SELECT * FROM sessions WHERE token=$1`,
    [token]
  );
  if (!result.rowCount) return null;
  return result.rows[0];
}

export async function insert(token, id) {
  const result = await connection.query(
    'INSERT INTO sessions (token, "userId") VALUES ($1, $2)',
    [token, id]
  );
  if (!result.rowCount) return false;
  return true;
}
