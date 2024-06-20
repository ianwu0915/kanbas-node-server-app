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

    app.post("/api/quizzes", async (req, res) => {
        const quiz = req.body;
        console.log(`Creating quiz ${JSON.stringify(quiz)}`);
        const newQuiz = await dao.createQuiz(quiz);
        res.json(newQuiz);
    });

    app.put("/api/quizzes/:id", async (req, res) => {
        const id = req.params.id;
        const quiz = req.body;
        console.log(`Updating quiz with id ${id}`);
        const status = await dao.updateQuiz(id, quiz);
        console.log(status);
        res.json(status);
    });

    app.delete("/api/quizzes/:id", async (req, res) => {
        const id = req.params.id;
        console.log(`Deleting quiz with id ${id}`);
        const status = await dao.deleteQuiz(id);
        res.json(status);
    });

}