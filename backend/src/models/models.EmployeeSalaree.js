import mongoose, { Schema } from "mongoose";
import { User } from "./user.model.js";
const EmployeeSalaryScheema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    salaryAmount: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
export const EmployeeSalary = mongoose.model(
  "EmployeeSalary",
  EmployeeSalaryScheema
);
