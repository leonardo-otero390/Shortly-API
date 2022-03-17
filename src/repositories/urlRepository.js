import { connection } from "../database.js";

export async function insert({ userId, url, shorten}) {
 const result = await connection.query(
    `
  INSERT INTO 
    urls("userId", url, shorten) 
  VALUES ($1, $2, $3)
`,
    [userId, url, shorten]
  );
  if (!result.rowCount) return false;
  return true;
}
