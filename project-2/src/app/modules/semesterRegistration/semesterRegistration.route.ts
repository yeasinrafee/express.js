import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { SemesterRegistrationValidations } from './semesterRegistration.validation';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.post(
  '/create-semester-registration',
  checkValidation(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema
  ),
  SemesterRegistrationController.createSemesterRegistration
);

// router.get('/:id', SemesterRegistrationController);
// router.patch('/:id', SemesterRegistrationController);
// router.get('/', SemesterRegistrationController);

export const semesterRegistrationRoutes = router;
