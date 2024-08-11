import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { WORD_PLUS_SPACE } from "../data/constants";
import {
  setInput,
  setCorrect,
  setIncorrect,
  startTimer,
  endTimer,
  resetEndTimer,
  resetInput,
  newText,
  resetStartTimer,
  startTest,
  stopTest,
  resetElapsedTime,
  calculateWPM,
  resetWPM,
} from "../store/typingSlice";

import { closeModal, openModal } from "../store/modalSlice";
import ArrowIcon from "./Buttons/ArrowIcon";
import TypingDisplay from "./TypingDisplay";
import Modal from "./Statistics/Modal";

function TypingTest() {
  const dispatch: AppDispatch = useDispatch();
  const { text, input, testStarted } = useSelector(
    (state: RootState) => state.typing
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const words = text.split("");
  const typedWords = input.split("");

  const matches = text.slice(0, input.length).match(WORD_PLUS_SPACE);
  const wordCount = matches
    ? matches.length + (input.length == text.length ? 1 : 0)
    : 0;

  const wordsAmount = text.trim().split(/\s+/).length;

  const handleNewText = () => {
    dispatch(closeModal());
    dispatch(resetStartTimer());
    dispatch(resetEndTimer());
    dispatch(setCorrect({ num: 0 }));
    dispatch(setIncorrect({ num: 0 }));
    dispatch(newText());
    dispatch(resetElapsedTime());
    dispatch(resetWPM());
    inputRef.current?.focus();
  };

  const handleRestart = () => {
    dispatch(closeModal());
    dispatch(resetStartTimer());
    dispatch(resetEndTimer());
    dispatch(resetInput());
    dispatch(setCorrect({ num: 0 }));
    dispatch(setIncorrect({ num: 0 }));
    dispatch(resetElapsedTime());
    dispatch(resetWPM());
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      !testStarted &&
      e.key !== "Shift" &&
      e.key !== "Control" &&
      e.key !== "Alt"
    ) {
      dispatch(startTest());
      dispatch(startTimer());
      inputRef.current?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (testStarted) {
      const value = e.target.value;
      if (value.length <= text.length) {
        dispatch(setInput(value));
        const correctCount = value
          .split("")
          .filter((char, index) => char === text[index]).length;
        const incorrectCount = value.length - correctCount;
        dispatch(setCorrect({ num: correctCount }));
        dispatch(setIncorrect({ num: incorrectCount }));
      }
    }
  };

  useEffect(() => {
    if (input.length === text.length && testStarted) {
      dispatch(endTimer());
      dispatch(calculateWPM());
      dispatch(stopTest());
      dispatch(openModal());
    }
  }, [input, testStarted]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [testStarted, input, text,]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-background ">
      <div className="max-w-5xl w-full mx-4 p-4">
        <div className="min-h-44">
          <TypingDisplay
            words={words}
            typedWords={typedWords}
            wordCount={wordCount}
            wordsAmount={wordsAmount}
            inputRef={inputRef}
            handleChange={handleChange}
            testStarted={testStarted}
          />
        </div>

        <div className="mt-4 text-center flex flex-col justify-center">
          <div className="flex justify-center gap-x-5">
            <ArrowIcon
              onClick={handleNewText}
              size={{
                width: 25,
                height: 25,
              }}
              title="Next Text"
            />
          </div>
        </div>

        <Modal
          inputRef={inputRef}
          handleNextText={handleNewText}
          handleRestart={handleRestart}
        />
      </div>
    </div>
  );
}

export default TypingTest;
