import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomPhrase } from "../data/Phrases";

interface CountPayload {
  num: number;
}

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    text:  getRandomPhrase(),
    input: "",
    correct: 0,
    incorrect: 0,
    startTime: 0,
    endTime: 0,
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setCorrect: (state,  action: PayloadAction<CountPayload>) => {
      state.correct = action.payload.num;
    },
    setIncorrect: (state, action: PayloadAction<CountPayload>) => {
      state.incorrect = action.payload.num;
    },
    startTimer: (state) => {
      state.startTime = Date.now();
    },
    endTimer: (state) => {
      state.endTime = Date.now();
    },
  },
});

export const { setInput, setCorrect, setIncorrect, startTimer, endTimer } = typingSlice.actions;


export default typingSlice.reducer