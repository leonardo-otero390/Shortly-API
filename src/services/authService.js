import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import * as userRepository from "../repositories/userRepository.js";
import * as authRepository from "../repositories/authRepository.js";
import Unauthorized from "../errors/UnauthorizedError.js";

export async function insert({ email, password }) {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new Unauthorized("Email e/ou senha incorretos");
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = uuid();
    await authRepository.insert(token, user.id);
    return res.send(token);
  }

  throw new Unauthorized("Email e/ou senha incorretos");
}
