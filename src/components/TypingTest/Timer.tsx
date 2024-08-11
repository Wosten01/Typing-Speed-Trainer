import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { resetElapsedTime, setElapsedTime } from "../../store/typingSlice";


/**
 * The timer component. 
 * Shows in real time how much time has 
 * passed since the beginning of the text.
 */
function Timer() {
  const dispatch: AppDispatch = useDispatch();
  const { testStarted, startTime, elapsedTime } = useSelector(
    (state: RootState) => state.typing
  );

  // The main time counting block.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!testStarted) {
        return;
      }
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      dispatch(setElapsedTime({ num: elapsed }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
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
