import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    courseNumber: {
        type: String,
        required: true
    },
    quizType: {
        type: String,
        enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
        default: 'Graded Quiz'
    },
    points: {
        type: Number,
        default: 0
    },
    assignmentGroup: {
        type: String,
        enum: ['Quizzes', 'Exams', 'Assignments', 'Project'],
        default: 'Quizzes'
    },
    shuffleAnswers: {
        type: Boolean,
        default: true
    },
    timeLimit: {
        type: Number,
        default: 20
    },
    multipleAttempts: {
        type: Boolean,
        default: false
    },
    howManyAttempts: {
        type: Number,
        default: 1
    },
    showCorrectAnswers: {
        type: String,
        enum: ['Never', 'Immediately'],
        default: 'Immediately'
    },
    accessCode: {
        type: String,
        default: ''
    },
    oneQuestionAtATime: {
        type: Boolean,
        default: true
    },
    webcamRequired: {
        type: Boolean,
        default: false
    },
    lockQuestionsAfterAnswering: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: true
    },
    availableDate: {
        type: Date,
        required: true
    },
    untilDate: {
        type: Date,
        required: true
    }
}, { collection: 'quizzes'});

export default quizSchema;