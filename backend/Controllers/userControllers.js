const UserModels = require("../Models/userModels");
const ErrorResponse = require("../Utils/errorResponse");
const asyncHandler = require("../Middleware/asyncHandler");
const generateToken = require("../Utils/generateToken");
const bycrypt = require("bcryptjs");
const { validateGenerateUsername } = require("../Utils/validation");
const { SentVerificationEmail } = require("../Utils/mailer");
const jwt = require("jsonwebtoken");
const userModels = require("../Models/userModels");

exports.home = (req, res) => {
  res.send("Hello World!");
};
exports.UserRegister = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    gender,
    bYear,
    bMonth,
    bDay,
  } = req.body;
  //check if user already exists
  const userCheck = await UserModels.findOne({ email, userName });
  // console.log(userCheck);
  if (userCheck) {
    return next(new ErrorResponse("User already exists", 400));
  }
  const salt = await bycrypt.genSalt(10);
  const hashPassword = await bycrypt.hash(password, salt);
  let tempUserName = firstName + lastName;
  tempUserName = tempUserName.toLowerCase();
  let newuserName = await validateGenerateUsername(tempUserName);

  const user = await UserModels.create({
    firstName,
    lastName,
    email,
    userName: newuserName,
    password: hashPassword,
    gender,
    bYear,
    bMonth,
    bDay,
  });
  const emailVerificationToken = generateToken(user, "30m");
  console.log(emailVerificationToken);
  const url = `${process.env.CLIENT_URL}/api/v1/verify/${emailVerificationToken}`;
  console.log(url);
  SentVerificationEmail(user.email, user.firstName, url);

  const token = generateToken(user, process.env.JWT_EXPIRE);

  res.status(200).json({
    success: true,
    token,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    verified: user.verified,
    message: "Please check your email to verify your account",
  });
});

exports.verifyAccount = asyncHandler(async (req, res, next) => {
  const { token } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await UserModels.findById(decoded.id);
  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  if (user.verified) {
    return next(new ErrorResponse("User already verified", 400));
  }

  user.verified = true;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Account verified successfully",
  });
});

exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const { email } = req.body.email;

  const user = await UserModels.findOne(email);
  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  if (!user.verified) {
    return next(new ErrorResponse("User has not verified", 403));
  }

  const resetToken = generateToken(user, process.env.JWT_EXPIRE);

  const url = `${process.env.CLIENT_URL}/api/v1/reset-password/${resetToken}`;
  console.log(url);
  //we have to create this sent email function
  // i need to work on this issue in future
  SentPasswordResetEmail(user.email, user.firstName, url);

  res.status(200).json({
    success: true,
    email: user.email,
    verified: user.verified,
    message: "Please check your email to reset your password.",
  });
});

exports.authUser = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    user: req.user.id,
    message: "You are authorized",
  });
});

exports.resetPassword = asyncHandler(async (req, res, next) => {
  const { token, password } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await UserModels.findById(decoded.id);
  if (!user) {
    return next(new ErrorResponse("Invalid link or expired", 400));
  }

  const salt = await bycrypt.genSalt(10);
  const hashPassword = await bycrypt.hash(password, salt);

  user.password = hashPassword;
  await user.save();
  token.delete;
  res.status(200).json({
    success: true,
    message: "Password reset successfully",
  });
});

exports.UserLogin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModels.findOne({ email }).select("+password");
  if (!user) {
    return next(
      new ErrorResponse(
        "Please Create a new Account, this Email does not Link with CollegeWindow",
        401
      )
    );
  }
  const isMatch = await bycrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ErrorResponse("The Password You Entered is Wrong", 401));
  }
  const token = generateToken(user, process.env.JWT_EXPIRE);
  res.status(200).json({
    success: true,
    token,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    verified: user.verified,
    // message:
    //   'Login Successful, Welcome to CollegeWindow please check your email to verify your account',
  });
});

exports.UserLogout = asyncHandler(async (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true, // only accessible by the web server
  });
});
