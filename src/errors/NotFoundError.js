import HttpError from "./HttpError";

export default class NotFound extends HttpError {
  constructor(message) {
    super();
    this.status = 409;
    this.message = message;
  }
}