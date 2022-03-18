import HttpError from "./HttpError.js";

export default class NotFound extends HttpError {
  constructor(message) {
    super();
    this.status = 404;
    this.message = message;
  }
}