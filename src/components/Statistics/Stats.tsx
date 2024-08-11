import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Timer from "../Timer";

function Stats() {
  const { text, correct, incorrect, wpm } = useSelector(
    (state: RootState) => state.typing
  );

  // const calculateWPM = () => {
  //   if (endTime > startTime) {
  //     return (endTime - startTime) / 60000;
  //   }
  //   return 0;
  // };

  // const getWPM = () => {
  //   if (endTime > startTime) {
  //     const minutes = (endTime - startTime) / 60000;
  //     console.log(minutes)
  //     return ;
  //   }
  //   return "0.00";
  // };

  return (
    <div className="mt-4 text-dark-accent text-lg sm:text-xl  tracking-wide">
  <div className="grid grid-cols-2 gap-4 p-4 border border-dark-main rounded-lg shadow-sm bg-dark-background">
    <div className="flex justify-center items-center text-center">Accuracy:</div>
    <div className="font-bold flex justify-center items-center">{`${Math.ceil(
      (correct / text.length) * 100
    )}%`}</div>
    <div className="flex justify-center items-center text-center">Correct Characters:</div>
    <div className="font-bold flex justify-center items-center">{correct}</div>
    <div className="flex justify-center items-center text-center">Incorrect Characters:</div>
    <div className="font-bold flex justify-center items-center">{incorrect}</div>
    <div className="flex justify-center items-center text-center">Time:</div>
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
    // <div className="mt-4 text-dark-accent text-lg tracking-wide">
    //   <div className="grid grid-cols-2 gap-4 p-4 border border-dark-main rounded-lg shadow-sm bg-dark-background">
    //     <div className="flex justify-center items-center">Accuracy:</div>
    //     <div className="font-bold flex justify-center items-center">{`${Math.ceil(
    //       (correct / text.length) * 100
    //     )} %`}</div>
    //     <div className="flex justify-center items-center whitespace-normal">
    //       {"Correct Characters:"}
    //     </div>
    //     <div className="font-bold flex justify-center items-center">
    //       {correct}
    //     </div>
    //     <div className="flex justify-center items-center whitespace">
    //       {"Incorrect Characters:"}
    //     </div>
    //     <div className="font-bold flex justify-center items-center">
    //       {incorrect}
    //     </div>
    //     <div className="flex justify-center items-center whitespace-normal">
    //       Time:
    //     </div>
    //     <div className="font-bold flex justify-center items-center">
    //       <Timer />
    //     </div>
    //     <div className="col-span-2 mt-4 border-t border-dark-main pt-4">
    //       <div className="flex justify-between">
    //         <span className="flex justify-center">WPM:</span>
    //         <span className="font-bold flex justify-center">
    //           {calculateWPM()}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="mt-4 text-dark-accent text-xl tracking-wide">
    //   <div className="flex justify-between mb-2">
    //     <span>Accuracy:</span>
    //     <span className="font-bold">{`${Math.ceil((correct / text.length) * 100)} %`}</span>
    //   </div>
    //   <div className="flex justify-between mb-2">
    //     <span>Correct Characters:</span>
    //     <span className="font-bold">{correct}</span>
    //   </div>
    //   <div className="flex justify-between mb-2">
    //     <span>Incorrect Characters:</span>
    //     <span className="font-bold">{incorrect}</span>
    //   </div>
    //   <div className="flex justify-between mb-2">
    //     <span>Time:</span>
    //     <Timer />
    //   </div>
    //   <div className="flex justify-around mt-8">
    //     <span className="">WPM:</span>
    //     <span className="font-bold">{calculateWPM()}</span>
    //   </div>
    // </div>
  );
}

export default Stats;
