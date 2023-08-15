const conn = require("./conn");
const Question = require("./Question");
const questionData = require("./questionData");
const CodingQuestion = require("./CodingQuestion");
const codingQuestionData = require("../db/codingQuestionData");

const syncAndSeed = async () => {
  const [questions] = await Promise.all(
    questionData.map(async (q) => {
      return Question.create({
        category: q.category,
        question: q.question,
        codeSnippet: q.codeSnippet,
        answerOne: q.answerOne,
        answerTwo: q.answerTwo,
        answerThree: q.answerThree,
        answerFour: q.answerFour,
        answerFive: q.answerFive,
        timesCorrect: q.timesCorrect,
        timesIncorrect: q.timesIncorrect,
      });
    })
  );
  const [codingQuestions] = await Promise.all(
    codingQuestionData.map(async (q) => {
      return CodingQuestion.create({
        category: q.category,
        question: q.question,
        inputs: q.inputs,
        answer: q.answer,
        code: q.code,
        codePython: q.codePython,
        timesCorrect: q.timesCorrect,
        timesIncorrect: q.timesIncorrect,
      });
    })
  );
  return [questions, codingQuestions];
};

module.exports = {
  syncAndSeed,
  Question,
  CodingQuestion,
};
