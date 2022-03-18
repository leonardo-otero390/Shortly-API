import { v4 as uuid } from "uuid";
import * as urlRepository from "../repositories/urlRepository.js";
import NotFound from "../errors/NotFoundError.js";

export async function insert(userId, url) {
  const shorten = uuid().substring(0, 8);
  await urlRepository.insert({ userId, url, shorten });
  return shorten;
}

export async function findByShortenAndIncrementVisitCount(shorten) {
  const url = await urlRepository.findByShorten(shorten);
  if (!url) throw new NotFound("Url não encontrada!");
  await urlRepository.incrementVisitCount(url.id);
  return url;
}
