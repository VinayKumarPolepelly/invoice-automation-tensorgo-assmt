import express from "express";
import cors from "cors";
import CookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(CookieParser());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admins", adminRouter);
export default app;
