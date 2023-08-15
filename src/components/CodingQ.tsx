import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchCodingQuestions } from "@/redux/store";

const CodingQ: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCodingQuestions());
  }, [dispatch]);

  const questions = useAppSelector((state) => state.questions);
  if (!questions) {
    console.log("no questions");
    return null;
  } else if (questions) {
    console.log("cqs");
  }
  console.log(questions);
  return <div>Coding Question Component</div>;
};

export default CodingQ;
