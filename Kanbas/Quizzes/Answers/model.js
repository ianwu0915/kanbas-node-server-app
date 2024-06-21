import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("AnswersModel", schema);
export default model;
