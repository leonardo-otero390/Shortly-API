import * as userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import ConflictError from "../errors/ConflictError.js";

export async function insert({ name, email, password }) {
  const existingUsers = await userRepository.findByEmail(email);
  if (existingUsers) throw new ConflictError("Este e-mail já está em uso");
  const passwordHash = bcrypt.hashSync(password, 10);
  const result = await userRepository.insert({
    name,
    email,
    password: passwordHash,
  });
  if (!result) throw new Error();
  return true;
}
