import React from "react";

interface TypingDisplayProps {
  words: string[];
  typedWords: string[];
  wordCount: number;
  wordsAmount: number;
  inputRef: React.RefObject<HTMLInputElement>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  testStarted: boolean;
}

function TypingDisplay({
  words,
  typedWords,
  wordCount,
  wordsAmount,
  inputRef,
  handleChange,
  testStarted,
}: TypingDisplayProps) {
  return (
    <main>
      <div
        className={`flex flex-col p-4 text-dark-text bg-dark-background text-2xl font-mono no-copy space-y-5 `}
        onClick={() => inputRef.current?.focus()}
      >
        <p>
          <span className="font-bold text-dark-accent text-lg">
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
                {char === " " && typedChar !== char && index < typedWords.length
                  ? "_"
                  : char}
              </span>
            );
          })}
        </p>
      </div>

      <input
        type="text"
        value={typedWords.join("")}
        onChange={handleChange}
        ref={inputRef}
        className="absolute opacity-0"
        autoFocus
        spellCheck={false}
      />
    </main>
  );
}

export default TypingDisplay;
