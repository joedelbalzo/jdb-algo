import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import MCQ from "../components/MCQ/MCQ";
import CodingQ from "../components/CodingQ";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import { useAppDispatch } from "@/redux/store";
import { fetchQuestions, fetchCodingQuestions } from "@/redux/store";

const Home: React.FC = () => {
  const [homeComponent, setHomeComponent] = useState("MCQ");
  const [correctNumber, setCorrectNumber] = useState<number>(0);
  const [incorrectNumber, setIncorrectNumber] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    Promise.all([dispatch(fetchQuestions()), dispatch(fetchCodingQuestions())]).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <div>
      <Nav setHomeComponent={setHomeComponent} />
      {loading === true ? (
        <Loading />
      ) : (
        <>
          {homeComponent === "MCQ" && (
            <MCQ
              updateCorrectNumber={setCorrectNumber}
              updateIncorrectNumber={setIncorrectNumber}
            />
          )}
          {homeComponent === "CodingQ" && (
            <MCQ
              updateCorrectNumber={setCorrectNumber}
              updateIncorrectNumber={setIncorrectNumber}
            />
          )}
        </>
      )}
      <Stats />
      <Footer />
    </div>
  );
};

export default Home;
