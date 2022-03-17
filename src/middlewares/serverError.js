import HttpError from "../errors/HttpError.js";

export default function serverError(err, req, res, next) {
  if (err instanceof HttpError) {
    return res.status(err.status).send(err.message);
  }
  res.sendStatus(500);
}
