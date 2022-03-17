import * as urlService from "../services/urlService.js";

export async function insert(req, res, next) {
  const { url } = req.body;
  const { user } = res.locals;
  try {
    const result = await urlService.insert(user.id, url);
    res.status(201).send({ shortUrl: result });
  } catch (error) {
    next(error);
  }
}
