import express from "express";
import checkValidation from "../../middlewares/validateRequest";
import { AdminController } from "./admin.controller";
import { AdminValidations } from "./admin.validation";

const router = express.Router();

// it'll call controller

router.get("/", AdminController.getAllAdmins);
router.get("/:id", AdminController.getSingleAdmin);
router.patch(
  "/:id",
  checkValidation(AdminValidations.updateAdminSchemaZod),
  AdminController.updateAdmin
);
router.delete("/:id", AdminController.deleteAdmin);

export const AdminRoutes = router;
