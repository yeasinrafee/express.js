import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { OfferedCourseValidations } from './offeredCourse.validation';
import { OfferedCourseController } from './offeredCourse.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
const router = express.Router();

router.post(
  '/create-offered-course',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(OfferedCourseValidations.createOfferedCourseValidationSchema),
  OfferedCourseController.createOfferedCourse
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(OfferedCourseValidations.updateOfferedCourseValidationSchema),
  OfferedCourseController.updateOfferedCourse
);

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  OfferedCourseController.deleteOfferedCourseFromDB
);

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin, USER_ROLE.faculty),
  OfferedCourseController.getAllOfferedCourses
);

router.get(
  '/my-offered-courses',
  auth(USER_ROLE.student),
  OfferedCourseController.getMyOfferedCourses
);

router.get(
  '/:id',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student
  ),
  OfferedCourseController.getSingleOfferedCourse
);

export const OfferedCourseRoutes = router;
