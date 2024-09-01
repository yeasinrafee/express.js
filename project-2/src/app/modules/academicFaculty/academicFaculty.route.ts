import express from 'express';
import checkValidation from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultyController } from './academicFaculty.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  checkValidation(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema
  ),
  AcademicFacultyController.createAcademicFaculty
);

router.get('/', AcademicFacultyController.getAllAcademicFaculties);
router.get(
  '/:facultyId',
  AcademicFacultyController.getSingleAcademicFacultyFromDB
);
router.patch(
  '/:facultyId',
  checkValidation(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyController.updateAcademicFaculty
);

export const AcademicFacultyRouter = router;
