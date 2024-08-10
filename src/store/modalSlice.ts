import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
