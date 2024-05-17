import { Router } from "express";
import {
  addProject,
  addSalary,
  getEmployeesList,
  getLeaveReportList,
  getProjectList,
  getProjectReportList,
  getSalareeDetails,
  loginAdmin,
  registerUser,
} from "../controllers/Admin.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/login").post(loginAdmin);
router.route("/register").post(registerUser);
router.route("/addEmployeeSalary").post(addSalary);
router.route("/getEmployees").get(getEmployeesList);
router.route("/getSalarees").get(getSalareeDetails);
router.route("/addProject").post(addProject);
router.route("/getProjects").get(getProjectList);
router.route("/getProjectReports").get(getProjectReportList);
router.route("/getLeaveReports").get(getLeaveReportList);
export default router;
