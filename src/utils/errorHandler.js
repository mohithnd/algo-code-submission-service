const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/baseError");

function errorHandler(err, req, res) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({
      success: false,
      message: err.message,
      error: err.details,
      data: {},
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    success: false,
    message: "Something Went Wrong",
    error: err.message || err,
    data: {},
  });
}

module.exports = errorHandler;
