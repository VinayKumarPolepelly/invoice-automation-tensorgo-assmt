import { Router } from "express";
import {
  addProject,
  addSalary,
  deleteEmployee,
  deleteSalary,
  getEmployeesList,
  getLeaveReportList,
  getProjectList,
  getProjectReportList,
  getSalareeDetails,
  loginAdmin,
  registerUser,
  updateLeaveReport,
} from "../controllers/Admin.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { loginRateLimit } from "../middlewares/rateLimit.js";
const router = Router();
router.route("/login").post(loginRateLimit, loginAdmin);
router.route("/register").post(verifyJwt, verifyAdmin, registerUser);
router.route("/addEmployeeSalary").post(verifyJwt, verifyAdmin, addSalary);
router.route("/getEmployees").get(verifyJwt, verifyAdmin, getEmployeesList);
router.route("/getSalarees").get(verifyJwt, verifyAdmin, getSalareeDetails);
router.route("/addProject").post(verifyJwt, verifyAdmin, addProject);
router.route("/getProjects").get(verifyJwt, verifyAdmin, getProjectList);
router
  .route("/getProjectReports")
  .get(verifyJwt, verifyAdmin, getProjectReportList);
router
  .route("/getLeaveReports")
  .get(verifyJwt, verifyAdmin, getLeaveReportList);
router
  .route("/updateLeaveReport")
  .post(verifyJwt, verifyAdmin, updateLeaveReport);
router.route("/deleteEmployee").post(verifyJwt, verifyAdmin, deleteEmployee);
router.route("/deleteSalary").post(verifyJwt, verifyAdmin, deleteSalary);
export default router;
