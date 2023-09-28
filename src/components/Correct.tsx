import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchQuestions, lastSubmittedAnswer } from "@/redux/store";
import styles from "./MCQ.module.css";

//things to do here:
//this should just say "Correct Questions", have an option to clear your stats, and a back button.
//It should just be a ul. Real simple.
//Should this be another part of the redux store? Or should this be local storage? Maybe its store when implementing users
