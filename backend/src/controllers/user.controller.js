import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { Project } from "../models/models.project.js";
import { ProjectReport } from "../models/models.projectReport.js";
import { LeaveReport } from "../models/models.leaveReport.js";
import { EmployeeSalary } from "../models/models.EmployeeSalaree.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    //console.log(userId);
    const userInstance = await User.findById(userId);
    //console.log(userInstance);
    const accessToken = await userInstance.generateAccessToken();
    const refreshToken = await userInstance.generateSessionToken();
    userInstance.refreshToken = refreshToken;
    userInstance.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(400, "something went wrong while generating the tokens");
  }
};

// const registerUser = async (req, res, next) => {
//   try {
//     await res.status(200).json({
//       message: "OK",
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// };

const loginUser = asyncHandler(async (req, res) => {
  //req body ->data
  //username or email
  //find the user
  //check the password
  //access and refresh token generation
  //send cookies

  const { username, password } = req.body;
  //console.log(req.body);
  if (!username) {
    throw new ApiError(400, "username is required");
  }
  if (!password) {
    throw new ApiError(400, "password is required");
  }

  const existedUser = await User.findOne({ username });
  if (!existedUser) {
    throw new ApiError(404, "you are not registered yet");
  }

  const isPasswordValid = await existedUser.isPasswordCorrect(password);
  //console.log(isPasswordValid);
  if (!isPasswordValid) {
    throw new ApiError(404, "invalid user credentials");
  }
  // res.status(200).json({
  //   user: existedUser,
  // });

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(existedUser._id);

  //console.log(accessToken, refreshToken);

  //by default anyone from the frontend also can modify the cookies
  //but we dont want that to happen, we want to modify the cookies only from the server
  //hence we use this
  const options = {
    httpOnly: true,
    secure: true,
  };
  //you can send with the key value pair within the string is key and another one is value
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: existedUser,
          accessToken,
          refreshToken,
        },
        "user loggedin successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
  // .json({
  //   tokens: { accessToken, refreshToken },
  // });
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken != user?.refreshToken) {
      throw new ApiError(401, "Refresh Token is expired or used");
    }
    const options = {
      httpOnly: true,
      secure: true,
    };
    const { accessToken, newRefreshToken } =
      await generateAccessTokenAndRefreshToken(user?._id);
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access Token Refreshed"
        )
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Refresh Token");
  }
});

const addProjectReport = asyncHandler(async (req, res) => {
  const { project, report } = req.body;
  if (!project) throw new ApiError(400, "project is required");
  if (!report) throw new ApiError(400, "report is required");
  const existedProject = await Project.findOne({ projectTitle: project });
  const user = await User.findOne({ username: req.user.username });
  const newReport = await ProjectReport.create({
    report,
    project: existedProject,
    user,
  });
  if (!newReport) throw new ApiError(500, "Internal server error");
  return res.status(200).json({ message: "report submitted successfully" });
});

const addLeaveReport = asyncHandler(async (req, res) => {
  const { fromDate, toDate, reason, status } = req.body;
  if (!fromDate) throw new ApiError(400, "From Date is a required field");
  if (!toDate) throw new ApiError(400, "From Date is a required field");
  if (!reason) throw new ApiError(400, "From Date is a required field");
  const newLeave = await LeaveReport.create({
    fromDate,
    toDate,
    reason,
    status,
    user: req.user,
  });
  if (!newLeave) throw new ApiError(500, "Internal server error");
  return res.status(200).json({ Leave: newLeave });
});

const getSalareeDetails = asyncHandler(async (req, res) => {
  const user = req.user;
  //console.log(userId);
  const salarees = await EmployeeSalary.find({ user });
  if (!salarees) throw new ApiError(400, "salarees not found");
  return res.status(200).json({ salarees: salarees });
});

export {
  refreshAccessToken,
  loginUser,
  logoutUser,
  addProjectReport,
  addLeaveReport,
  getSalareeDetails,
};
