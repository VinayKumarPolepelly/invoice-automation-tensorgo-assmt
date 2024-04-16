import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJwt = asyncHandler(async (req, res, next) => {
  try {
    //console.log(req?.cookies);
    const token =
      req?.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "unauthorized request");
    }
    const decodedToken = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    //here while signing the access token we have used the usename email and id as input to be decoded, hence
    //we will have the instances of those values
    const loggedInUser = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!loggedInUser) {
      throw new ApiError(400, "Invalid Access Token");
    }
    req.user = loggedInUser;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});

export const verifyAdmin = (req, res, next) => {
  //console.log(req.user);
  const { role } = req.user;
  if (!role) res.status(403).send("Forbidden, you are not authorized");
  if (role != "admin") {
    return res.status(403).send("Forbidden, you are not authorized");
  }
  next();
};
