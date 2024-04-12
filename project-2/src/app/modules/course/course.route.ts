import express from "express";
import checkValidation from "../../middlewares/validateRequest";
import { CourseValidation } from "./course.validation";
import { CourseControllers } from "./course.controller";

const router = express.Router();

router.post(
  "/create-course",
  checkValidation(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse
);

router.get("/", CourseControllers.getAllCourses);

router.get("/:id", CourseControllers.getSingleCourse);

router.delete("/:id", CourseControllers.deleteCourse);

router.put(
  "/:courseId/assign-faculties",
  checkValidation(CourseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultiesWithCourse
);

router.delete(
  "/:courseId/remove-faculties",
  checkValidation(CourseValidation.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesWithCourse
);

router.patch(
  "/:id",
  checkValidation(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourse
);

export const CourseRouter = router;
