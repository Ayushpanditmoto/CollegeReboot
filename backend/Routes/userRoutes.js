const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userControllers');
//validation
const { userSchema } = require('../Utils/validation');
const { validationMiddleware } = require('../Middleware/validationMiddleware');
const { auth } = require('../Middleware/authMiddleware');

//User Routes
router.get('/', userController.home);
router.post(
  '/register',
  validationMiddleware(userSchema, 'body'),
  userController.UserRegister
);
router.post('/verify', userController.verifyAccount);
router.route('/login').post(userController.UserLogin);
router.route('/logout').get(userController.UserLogout);
router.route('/forgot-password').post(userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
router.post('/auth', auth, userController.authUser);

module.exports = router;
