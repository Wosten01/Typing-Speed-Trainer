import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomPhrase } from "../data/phrase";

interface CountPayload {
  num: number;
}

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    text: getRandomPhrase(),
    input: "",
    correct: 0,
    incorrect: 0,
    startTime: 0,
    endTime: 0,
    testStarted: false
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setCorrect: (state, action: PayloadAction<CountPayload>) => {
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
    resetEndTimer: (state) => {
      state.endTime = 0;
    },
    resetStartTimer: (state) => {
      state.startTime = 0;
    },
    resetInput: (state) => {
      state.input = "";
    },
    regenerateText: (state) => {
      state.text = getRandomPhrase();
    },
    newText: (state) => {
      typingSlice.caseReducers.resetInput(state)
      typingSlice.caseReducers.regenerateText(state);
    },
    startTest: (state) => {
      state.testStarted = true
    },
    stopTest: (state) => {
      state.testStarted = false
    },
  },
});

export const {
  setInput,
  setCorrect,
  setIncorrect,
  startTimer,
  endTimer,
  resetEndTimer,
  newText,
  resetInput,
  regenerateText,
  resetStartTimer,
  startTest,
  stopTest
} = typingSlice.actions;

export default typingSlice.reducer;
