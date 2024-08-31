import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { EnrolledCourseValidations } from './enrolledCourse.validation';
import { EnrolledCourseControllers } from './enrolledCourse.controller';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/create-enrolled-course',
  auth('student'),
  checkValidation(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema
  ),
  EnrolledCourseControllers.createEnrolledCourse
);

export const EnrolledCourseRoutes = router;
