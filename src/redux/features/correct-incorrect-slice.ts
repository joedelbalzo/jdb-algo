import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import { AppDispatch } from "../store";

//def needs work

export const ADD_CORRECT_QUESTION = "ADD_CORRECT_QUESTION";
export const ADD_INCORRECT_QUESTION = "ADD_INCORRECT_QUESTION";

interface AddCorrectQuestion {
  type: typeof ADD_CORRECT_QUESTION;
  payload: object;
}

interface AddIncorrectQuestion {
  type: typeof ADD_INCORRECT_QUESTION;
  payload: object;
}

type QuestionActionTypes = AddCorrectQuestion | AddIncorrectQuestion;

interface QuestionState {
  correctQuestions: object[];
  incorrectQuestions: object[];
}

const initialState: QuestionState = {
  correctQuestions: [],
  incorrectQuestions: [],
};

// Reducer
export const questionsReducer = (
  state = initialState,
  action: QuestionActionTypes
): QuestionState => {
  const actionsMap = {
    [ADD_CORRECT_QUESTION]: () => ({
      ...state,
      correctQuestions: [...state.correctQuestions, action.payload],
    }),
    [ADD_INCORRECT_QUESTION]: () => ({
      ...state,
      incorrectQuestions: [...state.incorrectQuestions, action.payload],
    }),
  };

  return actionsMap[action.type] ? actionsMap[action.type]() : state;
};
