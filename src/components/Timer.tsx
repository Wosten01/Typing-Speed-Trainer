import React, { useState, useEffect } from "react";

interface TimerProps {
  startTime: number;
  testStarted: boolean;
}

function Timer({ startTime, testStarted }: TimerProps) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (startTime === 0) {
        setElapsedTime(0);
        return;
      }
      if (!testStarted) {
        return;
      }
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      setElapsedTime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, testStarted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="font-bold text-dark-accent text-lg">
      {formatTime(elapsedTime)}
    </div>
  );
}

export default Timer;
