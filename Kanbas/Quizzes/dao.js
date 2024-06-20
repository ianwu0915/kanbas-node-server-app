import model from "./model.js";

export const getAllQuizzesForCourses = (courseNumber) => model.find({ courseNumber: courseNumber });
export const getQuizById = (id) => model.findById(id);