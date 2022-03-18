import { connection } from "../database.js";

export async function insert({ userId, url, shorten }) {
  const result = await connection.query(
    `
  INSERT INTO 
    urls("userId", url, shorten) 
  VALUES ($1, $2, $3);
`,
    [userId, url, shorten]
  );
  if (!result.rowCount) return false;
  return true;
}

export async function findByShorten(shorten) {
  const result = await connection.query(
    ` SELECT * FROM urls WHERE shorten = $1;`,
    [shorten]
  );
  if (!result.rowCount) return null;
  return result.rows[0];
}

export async function incrementVisitCount(id) {
  const result = await connection.query(
    ` 
  UPDATE urls SET "visitCount" = "visitCount" + 1
  WHERE id = $1
  `,
    [id]
  );
  if (!result.rowCount) return false;
  return true;
}
