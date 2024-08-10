import {
  resetEndTimer,
  resetInput,
  setCorrect,
  setIncorrect,
} from "../../store/typingSlice";
import ArrowIcon from "../Buttons/ArrowIcon";
import ReloadIcon from "../Buttons/ReloadIcon";
import Stats from "./Stats";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  correct: number;
  incorrect: number;
  startTime: number;
  endTime: number;
  text: string;
  inputRef: React.RefObject<HTMLInputElement>;
  handleNextText: () => void;
}

function Modal({
  isOpen,
  correct,
  incorrect,
  startTime,
  endTime,
  text,
  inputRef,
  handleNextText,
}: ModalProps) {
  if (!isOpen) return null;

  const handleRestart = () => {
    dispatch(resetEndTimer());
    dispatch(resetInput());
    dispatch(setCorrect({ num: 0 }));
    dispatch(setIncorrect({ num: 0 }));
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-dark-background p-6 rounded-xl shadow-lg max-w-md w-full ">
        <div className="flex justify-center flex-col gap-y-7">
          <h2 className="text-xl font-bold mb-4 flex justify-center text-dark-main">
            Statistics
          </h2>
          <Stats
            correct={correct}
            incorrect={incorrect}
            startTime={startTime}
            endTime={endTime}
            text={text}
          />

          <div className="flex justify-around">
            <ReloadIcon
              onClick={handleRestart}
              size={{
                width: 30,
                height: 30,
              }}
              title="Restart Test"
            />
            <ArrowIcon
              onClick={handleNextText}
              size={{
                width: 25,
                height: 25,
              }}
              title="Next Text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
