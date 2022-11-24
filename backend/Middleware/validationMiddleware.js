const asyncHandler = require('./asyncHandler');
const errorResponse = require('../Utils/errorResponse');
const validationMiddleware = (schema) =>
  asyncHandler(async (req, res, next) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      return next(new errorResponse(error, 400));
    }
  });

module.exports = { validationMiddleware };
