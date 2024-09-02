import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { CourseValidation } from './course.validation';
import { CourseControllers } from './course.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-course',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse
);

router.get(
  '/',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student
  ),
  CourseControllers.getAllCourses
);

router.get(
  '/:id',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student
  ),
  CourseControllers.getSingleCourse
);

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  CourseControllers.deleteCourse
);

router.put(
  '/:courseId/assign-faculties',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(CourseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse
);

router.delete(
  '/:courseId/remove-faculties',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(CourseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesWithCourse
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourse
);

export const CourseRouter = router;
