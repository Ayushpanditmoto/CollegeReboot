const jwt = require('jsonwebtoken');
const ErrorResponse = require('../Utils/errorResponse');
const asyncHandler = require('./asyncHandler');
const User = require('../Models/userModels');

exports.auth = asyncHandler(async (req, res, next) => {
  let tmp = req.header('Authorization');
  const token = tmp ? tmp.split(' ')[1] : '';
  console.log(token);
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(
        new ErrorResponse('Not authorized to access this route', 401)
      );
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});
