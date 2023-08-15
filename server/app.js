const express = require("express");
const next = require("next");
const app = express();
const path = require("path");
const { Question, CodingQuestion } = require("./db");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const cors = require("cors");

nextApp.prepare().then(() => {
  app.use(express.json());
  app.use(cors());
  app.use("/dist", express.static(path.join(__dirname, "../dist")));

  app.get("/api/questions", async (req, res, next) => {
    try {
      const questions = await Question.findAll();
      res.send(questions);
    } catch (err) {
      console.log(err);
    }
  });
  app.put("/api/questions", async (req, res, next) => {
    try {
      const id = req.body.curr.id;
      const question = await Question.findByPk(id);
      const submit = req.body.submit;
      console.log("correct", question.timesCorrect, "incorrect", question.timesIncorrect);
      if (submit === "correct") {
        await question.update({
          attributes: [question.timesCorrect++],
        });
      } else if (submit === "incorrect") {
        await question.update({
          attributes: [question.timesIncorrect++],
        });
      }
      console.log("correct", question.timesCorrect, "incorrect", question.timesIncorrect);
      res.send(await Question.findAll());
    } catch (err) {
      console.log(err);
    }
  });
  app.get("/api/codingquestions", async (req, res, next) => {
    try {
      const codingQuestions = await CodingQuestion.findAll();
      res.send(codingQuestions);
    } catch (err) {
      console.log(err);
    }
  });
  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });
});

module.exports = app;

// const express = require("express");
// const app = express();
// const path = require("path");
// const { Question, CodingQuestion } = require("./db");

// app.use(express.json());
// app.use("/dist", express.static(path.join(__dirname, "../dist")));

// app.get("/api/test", (req, res) => {
//   res.send("Test successful");
// });

// module.exports = app;
