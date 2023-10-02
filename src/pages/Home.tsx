import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import MCQ from "../components/MCQ/MCQ";
import CodingQ from "../components/CodingQ";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useAppDispatch } from "@/redux/store";
import { fetchQuestions, fetchCodingQuestions } from "@/redux/store";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const [homeComponent, setHomeComponent] = useState("MCQ");
  let [correctThisSession, setCorrectThisSession] = useState<number>(0);
  let [incorrectThisSession, setIncorrectThisSession] = useState<number>(0);
  const [recentlyCorrect, setRecentlyCorrect] = useState<Object[]>([]);
  const [correctClass, setCorrectClass] = useState("");
  let [correctState, setCorrectState] = useState<number>(0);
  let [incorrectState, setIncorrectState] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const prevCorrectStateRef = useRef<number>(0);
  const prevIncorrectStateRef = useRef<number>(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([dispatch(fetchQuestions()), dispatch(fetchCodingQuestions())]).then(() => {
      setLoading(false);
    });
    setCorrectClass("");
    const numberCorrectFromLocalStorage = localStorage.getItem("numberCorrect");
    const numberIncorrectFromLocalStorage = localStorage.getItem("numberIncorrect");
    if (numberCorrectFromLocalStorage !== null) {
      setCorrectThisSession(JSON.parse(numberCorrectFromLocalStorage));
    }
    if (numberIncorrectFromLocalStorage !== null) {
      setIncorrectThisSession(JSON.parse(numberIncorrectFromLocalStorage));
    }
  }, [dispatch]);

  //insert local storage functions here

  useEffect(() => {
    if (correctState > prevCorrectStateRef.current) {
      setCorrectClass("correct");
      setCorrectThisSession(correctThisSession + 1);
      localStorage.setItem("numberCorrect", correctState.toString());
      localStorage.setItem("questionsCorrect", JSON.stringify(recentlyCorrect));
    }
    prevCorrectStateRef.current = correctState;
  }, [correctState, correctThisSession, recentlyCorrect]);

  useEffect(() => {
    if (incorrectState > prevIncorrectStateRef.current) {
      setCorrectClass("incorrect");
      setIncorrectThisSession(incorrectThisSession + 1);
      localStorage.setItem("numberIncorrect", incorrectState.toString());
    }
    prevIncorrectStateRef.current = incorrectState;
  }, [incorrectState, incorrectThisSession]);

  useEffect(() => {
    correctClass !== "" ? setTimeout(() => setCorrectClass(""), 2500) : setCorrectClass("");
  }, [correctClass]);

  const correctlyAnsweredRecently = (question: Object) => {
    setRecentlyCorrect((prevRecentlyCorrect) => {
      if (prevRecentlyCorrect.length >= 25) {
        return [...prevRecentlyCorrect.slice(1), question];
      }
      return [...prevRecentlyCorrect, question];
    });
  };

  const clearStats = () => {
    setCorrectThisSession(0);
    setIncorrectThisSession(0);
    setRecentlyCorrect([]);
    setCorrectClass("");
    localStorage.removeItem("numberCorrect");
    localStorage.removeItem("numberIncorrect");
    localStorage.removeItem("questionsCorrect");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Nav setHomeComponent={setHomeComponent} />
      {loading === true ? (
        <Loading />
      ) : (
        <>
          {homeComponent === "MCQ" && (
            <MCQ updateCorrectState={setCorrectState} updateIncorrectState={setIncorrectState} />
          )}
          {homeComponent === "CodingQ" && (
            <CodingQ
              updateCorrectState={setCorrectState}
              updateIncorrectState={setIncorrectState}
            />
          )}
        </>
      )}
      <div
        style={{
          display: "flex",
          marginBottom: "1rem",
          marginTop: "auto",
          flexGrow: 1,
        }}
      >
        <div className={styles.mcq_stats}>
          <button
            className={
              correctClass === "correct" ? styles.correct_answer : styles.correct_stats_button
            }
            style={{ flex: 1 }}
          >
            Correct:{correctThisSession}
          </button>
          <button
            className={
              correctClass === "incorrect" ? styles.incorrect_answer : styles.incorrect_stats_button
            }
            style={{ flex: 1 }}
          >
            Incorrect:{incorrectThisSession}
          </button>
          <button className={styles.clear_stats_button} style={{ flex: 1 }} onClick={clearStats}>
            Clear Stats
          </button>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
