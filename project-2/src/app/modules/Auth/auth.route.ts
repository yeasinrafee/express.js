import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/login',
  checkValidation(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

router.post(
  '/change-password',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student
  ),
  checkValidation(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword
);

router.post(
  '/refresh-token',
  checkValidation(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken
);

router.post(
  '/forget-password',
  checkValidation(AuthValidation.forgetPasswordValidationSchema),
  AuthControllers.forgetPassword
);

router.post(
  '/reset-password',
  checkValidation(AuthValidation.forgetPasswordValidationSchema),
  AuthControllers.resetPassword
);

export const AuthRoutes = router;
