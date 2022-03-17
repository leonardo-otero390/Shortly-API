export default class HttpError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}
