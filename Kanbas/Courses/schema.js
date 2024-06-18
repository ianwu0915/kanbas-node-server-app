import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: { type: String, required: true},
    name: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
}, { collection: "courses" });

export default courseSchema;
