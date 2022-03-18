import * as userRepository from "../repositories/userRepository.js";
import * as urlRepository from "../repositories/urlRepository.js";
import bcrypt from "bcrypt";
import ConflictError from "../errors/ConflictError.js";
import NotFound from "../errors/NotFoundError.js";

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
export async function find(id) {
  const user = await userRepository.find(id);
  if (!user) throw new NotFound("Usuário não encontrado");
  return user;
}
export async function findAndListUserUrls(id) {
  const user = await find(id);
  const urls = await urlRepository.listUserUrls(user.id);
  const visitCount = urls.reduce((prev, curr) => prev + curr.visitCount, 0);
  const result = {
    id: user.id,
    name: user.name,
    visitCount,
    shortenedUrls: urls,
  };
  return result;
}
