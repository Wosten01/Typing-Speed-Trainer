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
import Button from "./Button";

const TypingTest: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { text, input, correct, incorrect, startTime, endTime } = useSelector(
    (state: RootState) => state.typing
  );
  const [testStarted, setTestStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleStart = () => {
    setTestStarted(true);
    dispatch(startTimer());
    inputRef.current?.focus();
  };

  const handleRestart = () => {
    setTestStarted(true);
    dispatch(startTimer());
    dispatch(resetEndTimer());
    dispatch(resetInput());
    inputRef.current?.focus();
  };

  const handleNewText = () => {
    setTestStarted(true);
    dispatch(startTimer());
    dispatch(resetEndTimer());
    dispatch(resetInput());
    dispatch(newText());
    inputRef.current?.focus();
  };

  const handleNextText = () => {
    dispatch(regenerateText());
  };

  useEffect(() => {
    if (input.length === text.length && testStarted) {
      dispatch(endTimer());
      setTestStarted(false);
    }
  }, [input, text, testStarted, dispatch]);

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [testStarted, input, text, dispatch]);

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

  const words = text.split("");
  const typedWords = input.split("");

  const matches = text.slice(0, input.length).match(WORD_PLUS_SPACE);
  const wordCount = matches
    ? matches.length + (input.length == text.length ? 1 : 0)
    : 0;

  const wordsAmount = text.trim().split(/\s+/).length;

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-background ">
      <div className="max-w-5xl w-full mx-4 p-4">
        <div
          className={`flex flex-col p-4 text-dark-text bg-dark-background text-3xl font-mono no-copy space-y-5 `}
          onClick={() => inputRef.current?.focus()}
        >
          <p>
            <span className="font-bold text-dark-accent text-2xl">
              {`Typed: ${wordCount}/${wordsAmount}`}
            </span>
          </p>
          <p className="text-left">
            {words.map((char, index) => {
              const typedChar = typedWords[index] || "";
              const isLastTypedChar = index === typedWords.length;

              return (
                <span
                  key={index}
                  className={`relative duration-[375ms] ${
                    char === typedChar
                      ? "text-dark-main" // correct symbol
                      : typedChar
                      ? "text-dark-incorrect" // incorrect symbol
                      : "text-dark-secondary" // unentered symbol
                  } space-x-0`}
                >
                  {testStarted && isLastTypedChar && (
                    <span className="blinking-cursor text-dark-accent">|</span>
                  )}
                  {char === " " &&
                  typedChar !== char &&
                  index < typedWords.length
                    ? "_"
                    : char}
                </span>
              );
            })}
          </p>
        </div>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          ref={inputRef}
          className="absolute opacity-0 "
          autoFocus
        />

        <div className="mt-4 text-center flex flex-col justify-center">
          <div className="flex justify-center gap-x-5">
            <Button text={"Next text"} onClick={handleNextText} />
          </div>
          {endTime > 0 && (
            <span className="flex justify-center gap-x-10">
              <Button text={"Restart Test"} onClick={handleRestart} />
              <Button text={"New Text"} onClick={handleNewText} />
            </span>
          )}
          <div className="text-lg mt-4 text-dark-accent">
            <p>
              Correct Characters:{" "}
              <span className="font-bold text-dark-accent">{correct}</span>
            </p>
            <p>
              Incorrect Characters:{" "}
              <span className="font-bold text-dark-accent">{incorrect}</span>
            </p>
          </div>
          {endTime > 0 && (
            <p className="mt-4 text-lg font-semibold text-dark-accent">
              {`WPM: ${(
                text.split(" ").length / ((endTime - startTime) / 60000) || 0
              ).toFixed(2)}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
