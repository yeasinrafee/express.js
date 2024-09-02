import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import checkValidation from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-academic-semester',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(
    academicSemesterValidation.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemester
);

router.get(
  '/',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student
  ),
  AcademicSemesterController.getAllAcademicSemesters
);

router.get(
  '/:semesterId',
  auth(
    USER_ROLE.superAdmin,
    USER_ROLE.admin,
    USER_ROLE.faculty,
    USER_ROLE.student
  ),
  AcademicSemesterController.getSingleAcademicSemesterFromDB
);

router.patch(
  '/:semesterId',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(
    academicSemesterValidation.updateAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.updateAcademicSemester
);

export const AcademicSemesterRouter = router;
