import * as dao from "./dao.js";

export default function AnswersRoutes(app) {
    app.get("/api/answers/:quizId/:studentId", async (req, res) => {
        const quizId = req.params.quizId;
        const studentId = req.params.studentId;
        console.log(`Getting all answers for quiz ${quizId} and student ${studentId}`);
        const answers = await dao.findAnswersByStudentId(quizId, studentId);
        res.json(answers);
    });

    app.post("/api/answers", async (req, res) => {
        const answer = req.body;
        console.log(`Creating answer ${JSON.stringify(answer)}`);
        const newAnswer = await dao.createAnswer(answer);
        res.json(newAnswer);
    });

}