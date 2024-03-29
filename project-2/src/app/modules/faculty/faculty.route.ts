import express from "express";
import { FacultyController } from "./faculty.controller";
import { FacultyValidations } from "./faculty.validation";
import checkValidation from "../../middlewares/validateRequest";

const router = express.Router();

// it'll call controller

router.get("/", FacultyController.getAllFaculties);
router.get("/:id", FacultyController.getSingleFaculty);
router.patch(
  "/:id",
  checkValidation(FacultyValidations.updateFacultySchemaZod),
  FacultyController.updateFaculty
);
router.delete("/:id", FacultyController.deleteFaculty);

export const FacultyRoutes = router;
