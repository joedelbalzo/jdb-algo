import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";
import { AppDispatch } from "../store";
import { API_BASE_URL } from "../../config/config";

type QuestionsState = {
  questions: any[];
  codingQuestions: any[];
};

const initialState: QuestionsState = {
  questions: [],
  codingQuestions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<any[]>) => {
      state.questions = action.payload;
    },
    setCodingQuestions: (state, action: PayloadAction<any[]>) => {
      state.codingQuestions = action.payload;
    },
  },
});

export const { setQuestions, setCodingQuestions } = questionsSlice.actions;

export const fetchQuestions = () => async (dispatch: AppDispatch) => {
  console.log("you're in the store!");
  const response = await axios.get(`${API_BASE_URL}/api/questions`);
  console.log(response);
  dispatch(setQuestions(response.data));
};

export const fetchCodingQuestions = () => async (dispatch: AppDispatch) => {
  const response = await axios.get(`${API_BASE_URL}/api/codingquestions`);
  dispatch(setCodingQuestions(response.data));
};

export const lastSubmittedAnswer = (curr: any, submit: any) => async (dispatch: AppDispatch) => {
  const response = await axios.put(`${API_BASE_URL}/api/questions`, { curr, submit });
  dispatch(setQuestions(response.data));
};

export default questionsSlice;
