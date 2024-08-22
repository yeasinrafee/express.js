import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { OfferedCourseValidations } from './offeredCourse.validation';
import { OfferedCourseController } from './offeredCourse.controller';
const router = express.Router();

router.post(
  '/create-offered-course',
  checkValidation(OfferedCourseValidations.createOfferedCourseValidationSchema),
  OfferedCourseController.createOfferedCourse
);

router.patch(
  '/:id',
  checkValidation(OfferedCourseValidations.updateOfferedCourseValidationSchema),
  OfferedCourseController.updateOfferedCourse
);

router.delete('/:id', OfferedCourseController.deleteOfferedCourseFromDB);

router.get('/', OfferedCourseController.getAllOfferedCourses);

router.get('/:id', OfferedCourseController.getSingleOfferedCourse);

export const OfferedCourseRoutes = router;
