import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'quizzes' },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    answers: [{
      question: { type: mongoose.Schema.Types.ObjectId, ref: 'questions' },
      answer: mongoose.Mixed, // can be string, boolean, or array
      correct: Boolean,
      points: Number,
    }],
    score: Number,
    attemptDate: { type: Date, default: Date.now },
  }, { collection: 'answers' });

  export default AnswerSchema;