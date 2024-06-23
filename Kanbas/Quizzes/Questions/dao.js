import model from "./model.js";
export const createQuestion = (question) => {return model.create(question);}
export const findAllQuestions = () => model.find();
export const findQuestionsByQuizId = (quizId) => model.find({ quiz: quizId });
export const findQuestionById = (questionId) => model.findById(questionId);
export const updateQuestion = (questionId, question) => model.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestionByQuizId= (questionId) => model.deleteOne({ _id: questionId });