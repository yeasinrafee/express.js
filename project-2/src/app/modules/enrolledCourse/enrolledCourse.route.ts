import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { EnrolledCourseValidations } from './enrolledCourse.validation';
import { EnrolledCourseControllers } from './enrolledCourse.controller';
const router = express.Router();

router.post(
  '/create-enrolled-course',
  checkValidation(
    EnrolledCourseValidations.createEnrolledCourseValidationZodSchema
  ),
  EnrolledCourseControllers.createEnrolledCourse
);

export const EnrolledCourseRoutes = router;
