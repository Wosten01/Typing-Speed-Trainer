import React from "react";
import Timer from "./Timer";

interface TypingDisplayProps {
  words: string[];
  typedWords: string[];
  wordCount: number;
  wordsAmount: number;
  inputRef: React.RefObject<HTMLInputElement>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testStarted: boolean;
}

/**
 * The display component.
 * It combines 2 components:
 *
 * 1. The text input component.
 *
 * 2. A display component that displays the characters entered by the user
 * by coloring the original text.
 * The characters change color depending on whether the user has entered a character or not,
 * whether it matches the one entered.
 */
function TypingDisplay({
  words,
  typedWords,
  wordCount,
  wordsAmount,
  inputRef,
  handleChange,
}: TypingDisplayProps) {
  return (
    <main>
      {/*  A display component. */}
      <div
        className={`flex flex-col p-4 text-dark-text bg-dark-background text-2xl font-mono space-y-5 `}
        onClick={() => inputRef.current?.focus()}
      >
        <div className=" flex justify-between">
          <span className="font-bold text-dark-accent text-lg">
            {`Typed: ${wordCount}/${wordsAmount}`}
          </span>
          <div className=" mr-5">
            <Timer />
          </div>
        </div>
        <p className="text-left no-copy">
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
                {isLastTypedChar && (
                  <span className="blinking-cursor text-dark-accent">|</span>
                )}
                {char === " " && typedChar !== char && index < typedWords.length
                  ? "_"
                  : char}
              </span>
            );
          })}
        </p>
      </div>

      {/* The text input component */}
      <input
        id="wordsInput"
        type="text"
        value={typedWords.join("")}
        onChange={handleChange}
        ref={inputRef}
        className="absolute opacity-0"
        autoFocus
        spellCheck="false"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      />
    </main>
  );
}

export default TypingDisplay;
