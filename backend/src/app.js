import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
const app = express();

const corsOptions = {
  origin: "hhttps://66581b951ce667ad782f8f2f--shiny-toffee-af6c83.netlify.app", // Frontend domain
  credentials: true, // Allow credentials (cookies) to be sent
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admins", adminRouter);
export default app;
