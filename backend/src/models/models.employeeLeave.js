import mongoose, { Schema } from "mongoose";
const EmployeeAttendaneSchema = new Schema({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});
export const EmployeeLeave = mongoose.model(
  "EmployeeLeave",
  EmployeeAttendaneSchema
);
