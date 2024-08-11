import { createSlice } from "@reduxjs/toolkit";


/**
 * A slice that stores variables and methods 
 * for modal (statistic) window.
 */
const modalSlice = createSlice({
  name: "typing",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
    openModal,
    closeModal
} = modalSlice.actions;

export default modalSlice.reducer;
