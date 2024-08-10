import { useEffect } from "react";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { resetElapsedTime, setElapsedTime } from "../store/typingSlice";

function Timer() {
  const dispatch: AppDispatch = useDispatch();
  const { testStarted, startTime, elapsedTime } = useSelector(
    (state: RootState) => state.typing
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (startTime === 0) {
        dispatch(resetElapsedTime());
        return;
      }
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
