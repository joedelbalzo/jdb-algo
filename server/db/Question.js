const conn = require("./conn");
const { STRING, UUID, UUIDV4, INTEGER, TEXT } = conn.Sequelize;

const Question = conn.define("question", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  category: {
    type: STRING,
    allowNull: false,
  },
  question: {
    type: STRING,
    allowNull: false,
  },
  codeSnippet: {
    type: TEXT,
    allowNull: true,
  },
  answerOne: {
    type: STRING,
    allowNull: false,
  },
  answerTwo: {
    type: STRING,
    allowNull: false,
  },
  //allowing null below means true false questions are ok
  answerThree: {
    type: STRING,
    allowNull: true,
  },
  answerFour: {
    type: STRING,
    allowNull: true,
  },
  answerFive: {
    type: STRING,
    allowNull: true,
  },
  timesCorrect: {
    type: INTEGER,
    allowNull: true,
  },
  timesIncorrect: {
    type: INTEGER,
    allowNull: true,
  },
});

module.exports = Question;
