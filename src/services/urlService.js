import { v4 as uuid } from "uuid";
import * as urlRepository from "../repositories/urlRepository.js";

export async function insert( userId, url ) {
  const shorten = uuid().substring(0, 8);
  await urlRepository.insert({ userId, url, shorten });
  return shorten;
}
