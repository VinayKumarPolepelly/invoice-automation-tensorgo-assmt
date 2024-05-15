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
router.route("/addEmployeeSalary").post(verifyJwt, verifyAdmin, addSalary);
router.route("/getEmployees").get(getEmployeesList);
router.route("/getSalarees").get(verifyJwt, verifyAdmin, getSalareeDetails);
router.route("/addProject").post(verifyJwt, verifyAdmin, addProject);
router.route("/getProjects").get(verifyJwt, verifyAdmin, getProjectList);
router
  .route("/getProjectReports")
  .get(verifyJwt, verifyAdmin, getProjectReportList);
router
  .route("/getLeaveReports")
  .get(verifyJwt, verifyAdmin, getLeaveReportList);
export default router;
