import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomPhrase } from "../data/phrase";

interface CountPayload {
  num: number;
}

/**
 * A slice that stores variables
 * and methods for the typing process
 */
const typingSlice = createSlice({
  name: "typing",
  initialState: {
    text: getRandomPhrase(),
    input: "",
    correct: 0,
    incorrect: 0,
    startTime: 0,
    endTime: 0,
    testStarted: false,
    elapsedTime: 0,
    wpm: 0,
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
    // newText: (state) => {
    //   typingSlice.caseReducers.resetInput(state);
    //   typingSlice.caseReducers.regenerateText(state);
    // },
    startTest: (state) => {
      state.testStarted = true;
    },
    stopTest: (state) => {
      state.testStarted = false;
    },
    setElapsedTime: (state, action: PayloadAction<CountPayload>) => {
      state.elapsedTime = action.payload.num;
    },
    resetElapsedTime: (state) => {
      state.elapsedTime = 0;
    },
    calculateWPM: (state) => {
      if (state.endTime > state.startTime) {
        state.wpm =
          state.text.split(" ").length /
          ((state.endTime - state.startTime) / 60000);
      } else {
        state.wpm = 0;
      }
    },
    resetWPM: (state) => {
      state.wpm = 0;
    },
    resetState: (state) => {
      typingSlice.caseReducers.resetInput(state);
      typingSlice.caseReducers.resetStartTimer(state);
      typingSlice.caseReducers.resetEndTimer(state);
      typingSlice.caseReducers.resetWPM(state);
      typingSlice.caseReducers.setCorrect(state, {
        type: "typing/setCorrect",
        payload: { num: 0 },
      });
      typingSlice.caseReducers.setIncorrect(state, {
        type: "typing/setIncorrect",
        payload: { num: 0 },
      });
      typingSlice.caseReducers.resetElapsedTime(state);
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
  resetState,
  resetInput,
  regenerateText,
  resetStartTimer,
  startTest,
  stopTest,
  resetElapsedTime,
  setElapsedTime,
  calculateWPM,
  resetWPM,
} = typingSlice.actions;

export default typingSlice.reducer;
