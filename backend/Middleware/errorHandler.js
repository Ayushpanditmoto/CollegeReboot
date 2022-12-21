const ErrorResponse = require('../Utils/errorResponse');
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  // Log to console for dev
  console.log(err);
  //mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  //mongoose duplicate key
  if (err.code === 11000) {
    const message =
      'This email is already registered,Please try with another email';
    error = new ErrorResponse(message, 400);
  }
  //mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    middleware: 'errorHandler',
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
