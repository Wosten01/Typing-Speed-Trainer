import React, { useEffect, useState, useRef } from "react";
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
  regenerateText,
} from "../store/typingSlice";
import ReloadIcon from "./Buttons/ReloadIcon";
import Stats from "./Statistics/Stats";
import ArrowIcon from "./Buttons/ArrowIcon";
import TypingDisplay from "./TypingDisplay";
import Modal from "./Statistics/Modal";

function TypingTest() {
  const dispatch: AppDispatch = useDispatch();
  const { text, input, correct, incorrect, startTime, endTime } = useSelector(
    (state: RootState) => state.typing
  );
  const [testStarted, setTestStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const words = text.split("");
  const typedWords = input.split("");

  const matches = text.slice(0, input.length).match(WORD_PLUS_SPACE);
  const wordCount = matches
    ? matches.length + (input.length == text.length ? 1 : 0)
    : 0;

  const wordsAmount = text.trim().split(/\s+/).length;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleNewText = () => {
    setTestStarted(true);
    dispatch(resetEndTimer());
    dispatch(resetInput());
    dispatch(newText());
    inputRef.current?.focus();
    dispatch(startTimer());
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      !testStarted &&
      e.key !== "Shift" &&
      e.key !== "Control" &&
      e.key !== "Alt"
    ) {
      setTestStarted(true);
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
      setTestStarted(false);
    }
  }, [input, text, testStarted, dispatch]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [testStarted, input, text, dispatch]);

  function handleRestart(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-background ">
      <div className="max-w-5xl w-full mx-4 p-4">
        <TypingDisplay
          words={words}
          typedWords={typedWords}
          wordCount={wordCount}
          wordsAmount={wordsAmount}
          inputRef={inputRef}
          handleChange={handleChange}
          testStarted={testStarted}
        />

        <div className="mt-4 text-center flex flex-col justify-center">
          <div className="flex justify-center gap-x-5">
            {/* {endTime > 0 && (
              
            )} */}
            <ArrowIcon
              onClick={handleNewText}
              size={{
                width: 25,
                height: 25,
              }}
              title="Next Text"
            />
          </div>
          {endTime > 0 && (
            <Stats
              correct={correct}
              incorrect={incorrect}
              startTime={startTime}
              endTime={endTime}
              text={text}
            />
          )}
        </div>
        <div className=" flex justify-center">
          <button
            onClick={handleOpenModal}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Show Statistics
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            correct={correct}
            incorrect={incorrect}
            startTime={startTime}
            endTime={endTime}
            text={text}
            inputRef={inputRef}
            handleNextText={handleNewText}
          />
        </div>
      </div>
    </div>
  );
}

export default TypingTest;
