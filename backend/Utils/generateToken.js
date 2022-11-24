const jwt = require('jsonwebtoken');
const generateToken = (user, expires) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || expires,
  });
};

module.exports = generateToken;
