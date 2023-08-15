const conn = require("./conn");
const { STRING, UUID, UUIDV4, INTEGER, TEXT, ARRAY, JSON } = conn.Sequelize;

const CodingQuestion = conn.define("codingQuestion", {
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
  inputs: {
    type: ARRAY(JSON),
  },
  code: {
    type: TEXT,
  },
  codePython: {
    type: TEXT,
  },
  answer: {
    type: ARRAY(STRING),
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

module.exports = CodingQuestion;
