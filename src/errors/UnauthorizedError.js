import HttpError from "./HttpError";

export default class Unauthorized extends HttpError {
  constructor(message) {
    super();
    this.status = 401;
    this.message = message;
  }
}