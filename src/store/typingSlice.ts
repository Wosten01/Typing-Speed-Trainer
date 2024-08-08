import { createSlice } from "@reduxjs/toolkit";

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    text: "Type this example text quickly!",
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
    setCorrect: (state) => {
      state.correct += 1;
    },
    setIncorrect: (state) => {
      state.incorrect += 1;
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