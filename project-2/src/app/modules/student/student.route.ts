import express from "express";
import { StudentController } from "./student.controller";
import checkValidation from "../../middlewares/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

// it'll call controller

router.get("/", StudentController.getAllStudents);
router.get("/:id", StudentController.getSingleStudents);
router.patch(
  "/:id",
  checkValidation(studentValidations.updateStudentSchemaZod),
  StudentController.updateStudent
);
router.delete("/:id", StudentController.deleteStudents);

export const StudentRoutes = router;
