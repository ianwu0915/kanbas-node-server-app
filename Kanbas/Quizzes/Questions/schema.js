import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quiz: {
      type: mongoose.Schema.Types.ObjectId, ref: 'quizzes'
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
      default: "Multiple Choice",
    },
    points: {
      type: Number,
      default: 5,
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    choices: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: mongoose.Mixed,
      required: true,
    },
  },
  { collection: "questions" }
);

export default questionSchema;
