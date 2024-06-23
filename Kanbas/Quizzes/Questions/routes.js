import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
    app.get("/api/:quizId/questions", async (req, res) => {
        const quizId = req.params.quizId;
        console.log(`Finding questions for quiz ${quizId}`);
        const questions = await dao.findQuestionsByQuizId(quizId);
        console.log(questions);
        res.json(questions);
    });

    app.get("/api/questions/:questionId", async (req, res) => {
        const questionId = req.params.questionId;
        const question = await dao.findQuestionById(questionId);
        res.json(question);
    });

    app.post("/api/questions", async (req, res) => {
        const question = req.body;
        console.log(`Creating question ${JSON.stringify(question)}`);
        const newQuestion = await dao.createQuestion(question);
        res.json(newQuestion);
    });

    app.put("/api/questions/:questionId", async (req, res) => {
        const qid = req.params.questionId;
        const question = req.body;
        console.log(`Updating question with id ${qid}`);
        const status = await dao.updateQuestion(qid, question);
        console.log(status);
        res.json(status);
    });

    app.delete("/api/questions/:questionId", async (req, res) => {
        const qid = req.params.questionId;
        console.log(`Deleting question with id ${qid}`);
        const status = await dao.deleteQuestionByQuizId(qid);
        res.json(status);
    });

}