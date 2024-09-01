import { USER_ROLE } from './../user/user.constant';
import express from 'express';
import { FacultyController } from './faculty.controller';
import { FacultyValidations } from './faculty.validation';
import checkValidation from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.faculty),
  FacultyController.getAllFaculties
);
router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.faculty),
  FacultyController.getSingleFaculty
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  checkValidation(FacultyValidations.updateFacultySchemaZod),
  FacultyController.updateFaculty
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.faculty),
  FacultyController.deleteFaculty
);

export const FacultyRoutes = router;
