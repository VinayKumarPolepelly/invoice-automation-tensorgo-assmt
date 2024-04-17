import { Router } from "express";
import {
  addLeaveReport,
  addProjectReport,
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
router.route("/addProjectReport").post(verifyJwt, addProjectReport);
router.route("/addLeaveReport").post(verifyJwt, addLeaveReport);
router.route("/getSalareeDetails").get(verifyJwt, getSalareeDetails);
export default router;
