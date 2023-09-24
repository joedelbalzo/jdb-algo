import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchQuestions, lastSubmittedAnswer } from "@/redux/store";
import styles from "./MCQ.module.css";

interface MCQProps {
  updateCorrectState: React.Dispatch<React.SetStateAction<number>>;
  updateIncorrectState: React.Dispatch<React.SetStateAction<number>>;
}

const MCQ: React.FC<MCQProps> = ({ updateCorrectState, updateIncorrectState }) => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchQuestions());
  // }, [dispatch]);

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
    correctAnswerArray: Array<Boolean>;
  }

  const questions: Question[] = useAppSelector((state) => state.questions);

  const questionRandomizer = (): Question => {
    // console.log("recently correct", recentlyCorrect);
    if (recentlyCorrect.length === 0) {
      const question = questions[Math.floor(Math.random() * questions.length)];
      return question;
    }
    let notRecentlyCorrect = questions.filter((q) => !recentlyCorrect.includes(q));
    let mostlyCorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 3 < q.timesCorrect);
    let mostlyIncorrect = notRecentlyCorrect.filter((q) => q.timesIncorrect + 3 >= q.timesCorrect);

    let random = [...mostlyIncorrect, ...mostlyIncorrect, ...mostlyCorrect];
    return random[Math.floor(Math.random() * random.length)];
  };

  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [oneIsChecked, setOneIsChecked] = useState<boolean>(false);
  const [twoIsChecked, setTwoIsChecked] = useState<boolean>(false);
  const [threeIsChecked, setThreeIsChecked] = useState<boolean>(false);
  const [fourIsChecked, setFourIsChecked] = useState<boolean>(false);
  const [fiveIsChecked, setFiveIsChecked] = useState<boolean>(false);
  const [recentlyCorrect, setRecentlyCorrect] = useState<Question[]>([]);
  const [explanation, setExplanation] = useState("");

  if (!questions) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const q = questionRandomizer();
    setCurrentQuestion(q);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentQuestion) {
    return null;
  } else {
    console.log(currentQuestion, "current question");
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
    const checked = [oneIsChecked, twoIsChecked, threeIsChecked, fourIsChecked, fiveIsChecked];
    let correctAnswer = [];
    if (curr.correctAnswerArray[0] === true) {
      correctAnswer.push(curr.answerOne);
    }
    if (curr.correctAnswerArray[1] === true) {
      correctAnswer.push(curr.answerTwo);
    }
    if (curr.correctAnswerArray[2] === true) {
      correctAnswer.push(curr.answerThree);
    }
    if (curr.correctAnswerArray[3] === true) {
      correctAnswer.push(curr.answerFour);
    }
    if (curr.correctAnswerArray[4] === true) {
      correctAnswer.push(curr.answerFive);
    }

    console.log(checked, curr.correctAnswerArray);

    let correct = true;
    for (let i = 0; i < 5; i++) {
      if (checked[i] !== curr.correctAnswerArray[i]) {
        console.log("you're wrong.");
        updateIncorrectState((prevState) => prevState + 1);
        dispatch(lastSubmittedAnswer(curr, "incorrect"));
        setExplanation(
          `The answer for "${curr.question.toLowerCase()}" was "${correctAnswer.join(" ")}".`
        );
        correct = false;
        break;
      } else if (checked[i] === curr.correctAnswerArray[i]) {
        correct = true;
        continue;
      }
    }
    console.log("correct", correct);

    if (correct === true) {
      console.log("you're right!!!");
      updateCorrectState((prevState) => prevState + 1);
      curr.timesCorrect++;
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
      <div className={styles.main_question_div}>
        {currentQuestion && (
          <>
            <div className={styles.currentQuestion}>{currentQuestion.question}</div>
            {currentQuestion.codeSnippet ? (
              <div id={styles.codesnippet}>
                <pre style={{ margin: "0 auto" }}>{currentQuestion.codeSnippet}</pre>
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
                  className={styles.input}
                  id="checkbox"
                  type="checkbox"
                  checked={oneIsChecked}
                  onChange={(ev) => setOneIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerOne}
              </label>
              <label>
                <input
                  className={styles.input}
                  id="checkbox"
                  type="checkbox"
                  checked={twoIsChecked}
                  onChange={(ev) => setTwoIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerTwo}
              </label>
              <label>
                <input
                  className={styles.input}
                  id="checkbox"
                  type="checkbox"
                  checked={threeIsChecked}
                  onChange={(ev) => setThreeIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerThree}
              </label>
              <label>
                <input
                  className={styles.input}
                  id="checkbox"
                  type="checkbox"
                  checked={fourIsChecked}
                  onChange={(ev) => setFourIsChecked(ev.target.checked)}
                />
                {currentQuestion.answerFour}
              </label>
              {currentQuestion.answerFive ? (
                <label>
                  <input
                    className={styles.input}
                    id="checkbox"
                    type="checkbox"
                    checked={fiveIsChecked}
                    onChange={(ev) => setFiveIsChecked(ev.target.checked)}
                  />
                  {currentQuestion.answerFive}
                </label>
              ) : (
                ""
              )}
              <button type="submit" className={styles.button}>
                Submit Answer
              </button>
            </form>
          </>
        )}
        <>
          {explanation ? <div className={styles.wrong_answer_explanation}>{explanation}</div> : ""}
        </>
      </div>
    </>
  );
};

export default MCQ;
