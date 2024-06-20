import model from "./model.js";

export const getAllQuizzesForCourses = (courseNumber) => model.find({ courseNumber: courseNumber });
export const getQuizById = (id) => model.findById(id);
export const createQuiz = (quiz) => model.create(quiz);
export const updateQuiz = (id, quiz) => model.updateOne({ _id: id }, { $set : quiz });
export const deleteQuiz = (id) => model.deleteOne({ _id: id });