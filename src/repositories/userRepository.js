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

export async function rankUsersByVisitCount() {
  const result = await connection.query(
    `
    SELECT "userId",name,COUNT(url) AS "linksCount",SUM("visitCount")  AS "visitCount" 
    FROM urls JOIN users ON users.id="userId" 
    GROUP BY "userId",name 
    ORDER BY "visitCount"
    LIMIT 10;
`
  );
  if (!result.rowCount) return null;
  return result.rows;
}
