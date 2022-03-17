import HttpError from "./HttpError.js";

export default class Unauthorized extends HttpError {
  constructor(message) {
    super();
    this.status = 401;
    this.message = message;
  }
}