class CustomError extends Error {
  constructor(name, status, message) {
    super();
    this.name = name;
    this.message = message;
    this.status = status;
  }
}

module.exports = { CustomError };
