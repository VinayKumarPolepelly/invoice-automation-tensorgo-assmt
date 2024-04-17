import mongoose, { Schema } from "mongoose";
import { Project } from "./models.project.js";
import { User } from "./user.model.js";

const reportSchema = new Schema({
  project: {
    type: mongoose.Types.ObjectId,
    ref: Project,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
  report: {
    type: String,
    required: true,
  },
});
export const ProjectReport = mongoose.model("ProjectReport", reportSchema);
