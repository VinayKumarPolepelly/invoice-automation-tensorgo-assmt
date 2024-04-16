import mongoose, { Schema } from "mongoose";
import { Project } from "./models.project";
import { User } from "./user.model";

const reportSchema = new Schema({
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: Project,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  report: {
    type: String,
    required: true,
  },
});

export const Report = mongoose.model("Report", reportSchema);
