import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("quizModel", schema);
export default model;