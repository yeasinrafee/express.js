import express from "express";
import { StudentController } from "./student.controller";
import checkValidation from "../../middlewares/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

// it'll call controller

router.get("/", StudentController.getAllStudents);
router.get("/:studentId", StudentController.getSingleStudents);
router.patch(
  "/:studentId",
  checkValidation(studentValidations.updateStudentSchemaZod),
  StudentController.updateStudent
);
router.delete("/:studentId", StudentController.deleteStudents);

export const StudentRoutes = router;
