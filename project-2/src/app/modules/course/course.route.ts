import express from "express";
import checkValidation from "../../middlewares/validateRequest";
import { CourseVAlidation } from "./course.validation";
import { CourseControllers } from "./course.controller";

const router = express.Router();

router.post(
  "/create-course",
  checkValidation(CourseVAlidation.createCourseVAlidationSchema),
  CourseControllers.createCourse
);

router.get("/", CourseControllers.getAllCourses);

router.get("/:id", CourseControllers.getSingleCourse);

router.delete("/:id", CourseControllers.deleteCourse);

// router.patch(
//   "/:id",
//   checkValidation(
//     AcademicFacultyValidation.updateAcademicFacultyValidationSchema
//   ),
//   AcademicFacultyController.updateAcademicFaculty
// );

export const CourseRouter = router;
