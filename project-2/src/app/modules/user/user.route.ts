import express from "express";
import { UserController } from "./user.controller";
import { studentValidations } from "../student/student.validation";
import checkValidation from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create-student",
  checkValidation(studentValidations.createStudentSchemaZod),
  UserController.createStudent
);

export const UserRouters = router;
