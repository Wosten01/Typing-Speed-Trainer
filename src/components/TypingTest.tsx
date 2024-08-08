import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import {
  setInput,
  setCorrect,
  setIncorrect,
  startTimer,
  endTimer,
} from "../store/typingSlice";

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
    inputRef.current?.focus(); // Focus on input
  };

  useEffect(() => {
    if (input === text && testStarted) {
      dispatch(endTimer());
      setTestStarted(false);
    }
  }, [input, text, testStarted, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (testStarted) {
      const value = e.target.value;

      dispatch(setInput(value));
      const correctCount = value
        .split("")
        .filter((char, index) => char === text[index]).length;
      const incorrectCount = value.length - correctCount;
      dispatch(setCorrect({ num: correctCount }));
      dispatch(setIncorrect({ num: incorrectCount }));
    }
  };

  const words = text.split("");
  const typedWords = input.split("");
  const wordCount = input.trim().split(/\s+/).filter(Boolean).length; 

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-dark-background ">
      <div className="max-w-5xl w-full mx-4 p-4">
        <div
          className={`p-4 text-dark-text bg-dark-background text-4xl  text-left tracking-wide no-copy `}
          onClick={() => inputRef.current?.focus()} 
        >
          {words.map((char, index) => {
            const typedChar = typedWords[index] || "";
            return (
              <span
                key={index}
                className={`duration-[175ms] ${
                  char === typedChar
                    ? "text-dark-main" // correct symbol
                    : typedChar
                    ? "text-dark-incorrect" // Incorrect symbol
                    : "text-dark-secondary" // uninterred symbol
                }`}
              >
                {char}
              </span>
            );
          })}
          {testStarted && (
            <span className="border-l-2 border-black animate-blink ml-1">
              &nbsp; 
            </span>
          )}
        </div>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          ref={inputRef}
          className="absolute opacity-0" 
          autoFocus
        />

        <div className="mt-4 text-center">
          {!testStarted && (
            <button
              onClick={handleStart}
              className="text-lg bg-gray-800 text-dark-main px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Start Test
            </button>
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
            <p>
              Words Typed:{" "}
              <span className="font-bold text-dark-accent">{wordCount}</span>
            </p>
          </div>
          {endTime > 0 && (
            <p className="mt-4 text-lg font-semibold text-dark-accent">
              WPM:{" "}
              {(
                text.split(" ").length / ((endTime - startTime) / 60000) || 0
              ).toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingTest;
