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

export async function findByShorten(req, res, next) {
  const shorten = req.params.shortUrl;
  if (shorten.length !== 8) res.sendStatus(400);
  try {
    const result = await urlService.findByShortenAndIncrementVisitCount(
      shorten
    );
    res
      .status(200)
      .send({ id: result.id, shortUrl: result.shorten, url: result.url });
  } catch (error) {
    next(error);
  }
}

export async function remove(req, res, next) {
  const urlId = req.params.id;
  const userId = res.locals.user.id;
  try {
    await urlService.remove({ urlId, userId });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}
