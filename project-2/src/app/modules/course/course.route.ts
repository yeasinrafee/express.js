import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { CourseValidation } from './course.validation';
import { CourseControllers } from './course.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-course',
  auth('admin'),
  checkValidation(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse
);

router.get(
  '/',
  auth('student', 'faculty', 'admin'),
  CourseControllers.getAllCourses
);

router.get(
  '/:id',
  auth('student', 'faculty', 'admin'),
  CourseControllers.getSingleCourse
);

router.delete('/:id', CourseControllers.deleteCourse);

router.put(
  '/:courseId/assign-faculties',
  checkValidation(CourseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse
);

router.delete(
  '/:courseId/remove-faculties',
  auth('admin'),
  checkValidation(CourseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesWithCourse
);

router.patch(
  '/:id',
  auth('admin'),
  checkValidation(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourse
);

export const CourseRouter = router;
