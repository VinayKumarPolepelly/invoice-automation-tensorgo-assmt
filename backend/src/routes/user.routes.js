import { Router } from "express";
import {
  addLeaveReport,
  addProjectReport,
  getLeaveDetails,
  getProjectDetails,
  getProjectReportDetails,
  getSalareeDetails,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/login").post(loginUser);
//secured routes
router.route("/logout").post(verifyJwt, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);
router.route("/addProjectReport").post(addProjectReport);
router.route("/addLeaveReport").post(addLeaveReport);
router.route("/getSalareeDetails").get(getSalareeDetails);
router.route("/getProjectDetails").get(getProjectDetails);
router.route("/getLeaveDetails").get(getLeaveDetails);
router
  .route("/getProjectReportDetails")
  .get(verifyJwt, getProjectReportDetails);

export default router;
