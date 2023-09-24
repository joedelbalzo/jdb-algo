import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchCodingQuestions } from "@/redux/store";

interface CodingQProps {
  updateCorrectState: React.Dispatch<React.SetStateAction<number>>;
  updateIncorrectState: React.Dispatch<React.SetStateAction<number>>;
}

const CodingQ: React.FC<CodingQProps> = ({ updateCorrectState, updateIncorrectState }) => {
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
  return <div className="m-10">Coding Question Page Under Construction!</div>;
};

export default CodingQ;
