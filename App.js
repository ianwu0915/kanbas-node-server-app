import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import cors from "cors";
import "dotenv/config";

import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import HelloRoutes from "./Hello.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/route.js";
import QuizzesRoutes from "./Kanbas/Quizzes/routes.js";

const app = express();
const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

// configure cors first
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

// default session options
const sessionOptions = {                           
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {    // in production
  sessionOptions.proxy = true;                   // turn on proxy support
  sessionOptions.cookie = {                      // configure cookies for remote server
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

app.use(express.json()); // do all your work after this line
UserRoutes(app);
HelloRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
QuizzesRoutes(app);
Lab5(app);
app.listen(4000);
