import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Timer from "../Timer";

function Stats() {

  const { text, testStarted, endTime, startTime, correct, incorrect } = useSelector(
    (state: RootState) => state.typing
  )
  
  const calculateWPM = () => {
    if (endTime > startTime) {
      const minutes = (endTime - startTime) / 60000;
      return (text.split(" ").length / minutes).toFixed(2);
    }
    return "0.00";
  };

  return (
    <div className="text-lg mt-4 text-dark-accent">
    <div className="flex justify-between mb-2">
      <span>Correct Characters:</span>
      <span className="font-bold">{correct}</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Incorrect Characters:</span>
      <span className="font-bold">{incorrect}</span>
    </div>
    <div className="flex justify-between mb-2">
      <span>Time:</span>
      <Timer startTime={startTime} testStarted={testStarted} />
    </div>
    <div className="flex justify-between mt-4">
      <span className="font-semibold">WPM:</span>
      <span className="font-bold">{calculateWPM()}</span>
    </div>
  </div>
  );
}

export default Stats;
