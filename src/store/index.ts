import { configureStore } from "@reduxjs/toolkit";
import typingReducer from "./typingSlice";
import modalReducer from "./modalSlice"

export const store = configureStore({
  reducer: {
    typing: typingReducer,
    modal: modalReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
