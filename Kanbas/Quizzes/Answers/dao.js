import model from './model.js';

export const createAnswer = (answer) => { return model.create(answer);}
export const findAnswersByStudentId = (quizId, studentId) => model.find({ quiz: quizId, student: studentId });