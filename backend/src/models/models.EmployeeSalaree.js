import mongoose, { Schema } from "mongoose";
const EmployeeSalaryScheema = new Schema(
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
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
