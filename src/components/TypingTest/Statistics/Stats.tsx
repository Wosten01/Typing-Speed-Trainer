import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Timer from "../Timer";

/**
 * The statistics component. Shows the overall typing statistics.
 */
function Stats() {
  const { text, correct, incorrect, wpm } = useSelector(
    (state: RootState) => state.typing
  );

  return (
    <div className="mt-4 text-dark-accent text-lg sm:text-xl  tracking-wide">
      <div className="grid grid-cols-2 gap-4 p-4 border border-dark-main rounded-lg shadow-sm bg-dark-background">
        <div className="flex justify-center items-center text-center">
          Accuracy:
        </div>
        <div className="font-bold flex justify-center items-center">{`${Math.ceil(
          (correct / text.length) * 100
        )}%`}</div>
        <div className="flex justify-center items-center text-center">
          Correct Characters:
        </div>
        <div className="font-bold flex justify-center items-center">
          {correct}
        </div>
        <div className="flex justify-center items-center text-center">
          Incorrect Characters:
        </div>
        <div className="font-bold flex justify-center items-center">
          {incorrect}
        </div>
        <div className="flex justify-center items-center text-center">
          Time:
        </div>
        <div className="font-bold flex justify-center items-center">
          <Timer />
        </div>
        <div className="col-span-2 mt-4 border-t border-dark-main pt-4">
          <div className=" grid grid-cols-2">
            <span className="flex justify-center">WPM:</span>
            <span className="font-bold flex justify-center">
              {wpm.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
