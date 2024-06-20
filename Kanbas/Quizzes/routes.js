import * as dao from "./dao.js";

export default function QuizRoutes(app) {
    app.get("/api/courses/:courseNumber/quizzes", async (req, res) => {
        const courseNumber = req.params.courseNumber;
        console.log(`Getting all quizzes for course ${courseNumber}`);
        const quizzes = await dao.getAllQuizzesForCourses(courseNumber);
        res.json(quizzes);
    });

    app.get("/api/quizzes/:id", async (req, res) => {
        const id = req.params.id;
        console.log(`Getting quiz with id ${id}`);
        const quiz = await dao.getQuizById(id);
        res.json(quiz);
    });

}