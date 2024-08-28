import express from 'express';
import { UserController } from './user.controller';
import { studentValidations } from '../student/student.validation';
import checkValidation from '../../middlewares/validateRequest';
import { FacultyValidations } from '../faculty/faculty.validation';
import { AdminValidations } from '../admin/admin.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { UserValidation } from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  upload.single('file'),
  checkValidation(studentValidations.createStudentSchemaZod),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  auth(USER_ROLE.admin),
  checkValidation(FacultyValidations.createFacultySchemaZod),
  UserController.createFaculty
);

router.post(
  '/create-admin',
  checkValidation(AdminValidations.createAdminSchemaZod),
  UserController.createAdmin
);

router.post(
  '/change-status/:id',
  auth('admin'),
  checkValidation(UserValidation.changeStatusValidationSchema),
  UserController.changeStatus
);

router.get('/me', auth('student', 'faculty', 'admin'), UserController.getMe);
export const UserRouters = router;
