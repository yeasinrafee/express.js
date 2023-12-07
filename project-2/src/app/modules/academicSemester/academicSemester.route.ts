import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import checkValidation from "../../middlewares/validateRequest";
import { academicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  checkValidation(
    academicSemesterValidation.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemester
);

router.get("/", AcademicSemesterController.getAllAcademicSemesters);
router.get(
  "/:semesterId",
  AcademicSemesterController.getSingleAcademicSemesterFromDB
);
router.patch(
  "/:semesterId",
  checkValidation(
    academicSemesterValidation.updateAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.updateAcademicSemester
);

export const AcademicSemesterRouter = router;
