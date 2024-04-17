import mongoose, { Schema, model } from "mongoose";
import { User } from "./user.model.js";
const leaveReportSchema = new Schema(
  {
    fromDate: {
      type: Date,
      required: true,
    },
    toDate: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: User,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const LeaveReport = model("LeaveReports", leaveReportSchema);
