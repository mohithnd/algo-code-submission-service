const BaseError = require("./baseError");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends BaseError {
  constructor(details) {
    super(
      "InternalServerError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something Went Wrong",
      details
    );
  }
}

module.exports = InternalServerError;
