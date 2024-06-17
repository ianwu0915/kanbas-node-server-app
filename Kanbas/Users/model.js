import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("UserModel", schema);
export default model;

// Mongoose model is a wrapper on the Mongoose schema. 
// A model is a class with which we construct documents. In this case, we are creating a model for the User schema.