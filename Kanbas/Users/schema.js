import mongoose from "mongoose";
const Schema = mongoose.Schema;

const enrolledCoursesSchema = new mongoose.Schema({
  "courseId": {type: String, required: true, unique: true}, 
  "courseName": {type: String, required: true, unique: true},
  "enrolledDate": {type: Date, required: true}, }
);

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
    enrolledCourses: [enrolledCoursesSchema],
  },
  { collection: "users" }
);
export default userSchema;

