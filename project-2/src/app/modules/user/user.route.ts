import express from 'express';
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import checkValidation from '../../middlewares/validateRequest';
import { FacultyValidations } from '../faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  checkValidation(studentValidations.createStudentSchemaZod),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  checkValidation(FacultyValidations.createFacultySchemaZod),
  UserController.createFaculty
);

router.post(
  '/create-admin',
  checkValidation(AdminValidations.createAdminSchemaZod),
  UserController.createAdmin
);
export const UserRouters = router;
