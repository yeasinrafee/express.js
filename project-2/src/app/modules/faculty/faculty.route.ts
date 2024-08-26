import { USER_ROLE } from './../user/user.constant';
import express from 'express';
import { FacultyController } from './faculty.controller';
import { FacultyValidations } from './faculty.validation';
import checkValidation from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';

const router = express.Router();

// it'll call controller

router.get('/', auth(USER_ROLE.admin), FacultyController.getAllFaculties);
router.get('/:id', FacultyController.getSingleFaculty);
router.patch(
  '/:id',
  checkValidation(FacultyValidations.updateFacultySchemaZod),
  FacultyController.updateFaculty
);
router.delete('/:id', FacultyController.deleteFaculty);

export const FacultyRoutes = router;
