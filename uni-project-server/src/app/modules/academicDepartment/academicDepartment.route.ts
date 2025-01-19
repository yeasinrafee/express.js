import express from "express";
import checkValidation from "../../middlewares/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDepartment.controller";

const router = express.Router();

router.post(
  "/create-academic-department",
  checkValidation(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.createAcademicDepartment
);

router.get("/", AcademicDepartmentController.getAllAcademicDepartments);
router.get(
  "/:departmentId",
  AcademicDepartmentController.getSingleAcademicDepartmentFromDB
);
router.patch(
  "/:departmentId",
  checkValidation(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.updateAcademicDepartment
);

export const AcademicDepartmentRouter = router;
