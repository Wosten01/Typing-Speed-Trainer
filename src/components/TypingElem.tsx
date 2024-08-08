import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInput, setCorrect, setIncorrect, startTimer, endTimer } from '../store/typingSlice';
import {RootState, AppDispatch } from "../store"

const TypingTest: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { text, input, correct, incorrect, startTime, endTime } = useSelector((state: RootState) => state.typing);

  useEffect(() => {
    dispatch(startTimer());
  }, [dispatch]);

  useEffect(() => {
    if (input === text) {
      dispatch(endTimer());
    }
  }, [input, text, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput(e.target.value));
  };

  const words = text.split('');
  const typedWords = input.split('');

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Typing Test</h1>
      <div className="mb-4">
        <p className="text-xl">
          {words.map((char, index) => {
            const typedChar = typedWords[index] || '';
            return (
              <span
                key={index}
                className={`${
                  char === typedChar ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {char}
              </span>
            );
          })}
        </p>
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <div className="mt-4">
        <p>Correct Characters: {correct}</p>
        <p>Incorrect Characters: {incorrect}</p>
        {endTime > 0 && (
          <p>
            WPM: {((text.split(' ').length / ((endTime - startTime) / 60000)) || 0).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default TypingTest;
