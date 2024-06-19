const BaseError = require("./baseError");
const { StatusCodes } = require("http-status-codes");

class SubmissionCreationError extends BaseError {
  constructor(details) {
    super(
      "SubmissionCreationError",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Not Able To Create Submission",
      details
    );
  }
}

module.exports = SubmissionCreationError;
