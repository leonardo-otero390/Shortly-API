import HttpError from "./HttpError";

export default class Conflict extends HttpError {
  constructor(message) {
    super();
    this.status = 409;
    this.message = message;
  }
}
