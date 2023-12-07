import { Router } from "express";
import { UserRouters } from "../modules/user/user.route";
import { StudentRoutes } from "../modules/student/student.route";
import { AcademicSemesterRouter } from "../modules/academicSemester/academicSemester.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRouters,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRouter,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
