import React from 'react';

interface StatsProps {
  correct: number;
  incorrect: number;
  startTime: number;
  endTime: number;
  text: string;
}

function Stats({ correct, incorrect, startTime, endTime, text }: StatsProps){
  const calculateWPM = () => {
    if (endTime > startTime) {
      const minutes = (endTime - startTime) / 60000;
      return (text.split(" ").length / minutes).toFixed(2);
    }
    return '0.00';
  };

  return (
    <div className="text-lg mt-4 text-dark-accent">
      <p>
        Correct Characters:{" "}
        <span className="font-bold text-dark-accent">{correct}</span>
      </p>
      <p>
        Incorrect Characters:{" "}
        <span className="font-bold text-dark-accent">{incorrect}</span>
      </p>
      <p className="mt-4 text-lg font-semibold text-dark-accent">
        WPM: {calculateWPM()}
      </p>
    </div>
  );
};

export default Stats;