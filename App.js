import express from "express";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/Users/routes.js";
import "dotenv/config";

import Lab5 from "./Lab5/index.js";
import HelloRoutes from "./Hello.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import cors from "cors";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/route.js";

const app = express();
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

app.use(cors());
app.use(express.json()); // do all your work after this line
UserRoutes(app);

HelloRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
app.listen(4000);