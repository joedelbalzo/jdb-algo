import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchQuestions, lastSubmittedAnswer } from "@/redux/store";
import styles from "./MCQ.module.css";

interface MCQProps {
  updateCorrectNumber: React.Dispatch<React.SetStateAction<number>>;
  updateIncorrectNumber: React.Dispatch<React.SetStateAction<number>>;
}

const MCQ: React.FC<MCQProps> = ({ updateCorrectNumber, updateIncorrectNumber }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  interface Question {
    category: string;
    question: string;
    codeSnippet: string;
    answerOne: string;
    answerTwo: string;
    answerThree: string;
    answerFour: string;
    answerFive: string;
    timesIncorrect: number;
    timesCorrect: number;
  }

  const questions: Question[] = useAppSelector((state) => state.questions);

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [oneIsChecked, setOneIsChecked] = useState<boolean>(false);
  const [twoIsChecked, setTwoIsChecked] = useState<boolean>(false);
  const [threeIsChecked, setThreeIsChecked] = useState<boolean>(false);
  const [fourIsChecked, setFourIsChecked] = useState<boolean>(false);
  const [fiveIsChecked, setFiveIsChecked] = useState<boolean>(false);
  const [recentlyCorrect, setRecentlyCorrect] = useState<Question[]>([]);
  const [explanation, setExplanation] = useState("");

  const questionRandomizer = (): Question => {
    if (recentlyCorrect.length === 0) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      return question;
    }
    let notRecentlyCorrect = questions.filter((q) => !recentlyCorrect.includes(q));
    let mostlyCorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 3 < q.timesCorrect);
    let mostlyIncorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 3 >= q.timesCorrect);
    console.log("mostly incorrect", mostlyIncorrect);
    let random = [...mostlyIncorrect, ...mostlyIncorrect, ...mostlyCorrect];
    return random[Math.floor(Math.random() * random.length)];
  };

  useEffect(() => {
    try {
      setCurrentQuestion(questionRandomizer());
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!questions) {
    return null;
  }

  //randomizer in js
  const correctlyAnsweredRecently = (question: Question): void => {
    setRecentlyCorrect((prevRecentlyCorrect) => {
      if (prevRecentlyCorrect.length >= 25) {
        return [...prevRecentlyCorrect.slice(1), question];
      }
      return [...prevRecentlyCorrect, question];
    });
  };

  const handleAnswerSubmit = async (ev: React.FormEvent<HTMLFormElement>, curr: Question) => {
    ev.preventDefault();
    const mcqAnswerArray = [];
    const correctAnswer = [];
    if (curr.answerOne[0] === "C") {
      mcqAnswerArray.push(true);
      correctAnswer.push(curr.answerOne.slice(1));
    } else mcqAnswerArray.push(false);
    if (curr.answerTwo[0] === "C") {
      mcqAnswerArray.push(true);
      correctAnswer.push(curr.answerTwo.slice(1));
    } else mcqAnswerArray.push(false);
    if (curr.answerThree && curr.answerThree[0] === "C") {
      mcqAnswerArray.push(true);
      correctAnswer.push(curr.answerThree.slice(1));
    } else mcqAnswerArray.push(false);
    if (curr.answerFour && curr.answerFour[0] === "C") {
      mcqAnswerArray.push(true);
      correctAnswer.push(curr.answerFour.slice(1));
    } else mcqAnswerArray.push(false);
    if (curr.answerFive && curr.answerFive[0] === "C") {
      mcqAnswerArray.push(true);
      correctAnswer.push(curr.answerFive.slice(1));
    } else mcqAnswerArray.push(false);
    const checked = [oneIsChecked, twoIsChecked, threeIsChecked, fourIsChecked, fiveIsChecked];

    let correct = true;
    for (let i = 0; i < mcqAnswerArray.length; i++) {
      if (mcqAnswerArray[i] === checked[i]) {
        correct = true;
      } else if (mcqAnswerArray[i] !== checked[i]) {
        updateIncorrectNumber((prevState) => prevState + 1);
        dispatch(lastSubmittedAnswer(curr, "incorrect"));
        setExplanation(
          `The answer for "${curr.question.toLowerCase()}" was "${correctAnswer.join(" ")}".`
        );
        correct = false;
        break;
      }
    }
    if (correct === true) {
      updateCorrectNumber((prevState) => prevState + 1);
      // curr.timesCorrect++;
      correctlyAnsweredRecently(curr);
      dispatch(lastSubmittedAnswer(curr, "correct"));
      setExplanation("");
    }
    await setCurrentQuestion(questionRandomizer());
    setOneIsChecked(false);
    setTwoIsChecked(false);
    setThreeIsChecked(false);
    setFourIsChecked(false);
    setFiveIsChecked(false);
  };

  return (
    <>
      <div className={styles.mainQuestionDiv}>
        {currentQuestion && (
          <>
            <div className={styles.currentQuestion}>{currentQuestion.question}</div>
            {currentQuestion.codeSnippet ? (
              <div id="codesnippet">
                <pre>{currentQuestion.codeSnippet}</pre>
              </div>
            ) : (
              ""
            )}
            <form
              className={styles.form}
              onSubmit={(ev) => handleAnswerSubmit(ev, currentQuestion)}
            >
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={oneIsChecked}
                  onChange={(ev) => setOneIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerOne.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={twoIsChecked}
                  onChange={(ev) => setTwoIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerTwo.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={threeIsChecked}
                  onChange={(ev) => setThreeIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerThree.slice(1)}
              </label>
              <label>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={fourIsChecked}
                  onChange={(ev) => setFourIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerFour.slice(1)}
              </label>
              {currentQuestion.answerFive ? (
                <label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={fiveIsChecked}
                    onChange={(ev) => setFiveIsChecked(ev.target.checked)}
                  />
                  {currentQuestion.answerFive.slice(1)}
                </label>
              ) : (
                ""
              )}
              <button type="submit" className="run-button">
                Submit Answer
              </button>
            </form>
          </>
        )}
        <>{explanation ? <div className="wrong-answer-explanation">{explanation}</div> : ""}</>
      </div>
    </>
  );
};
export default MCQ;
