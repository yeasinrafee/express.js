import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

// it'll call controller
router.post("/create-student", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);
router.get("/:studentId", StudentController.getSingleStudents);
router.delete("/:studentId", StudentController.deleteStudents);

export const StudentRoutes = router;
