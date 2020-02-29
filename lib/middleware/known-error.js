module.exports = class KnownError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
};

