import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ArrowIcon from "../Buttons/ArrowIcon";
import ReloadIcon from "../Buttons/ReloadIcon";
import Stats from "./Stats";

interface ModalProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleNextText: () => void;
  handleRestart: () => void;
}

function Modal({ handleNextText, handleRestart }: ModalProps) {
  const { isOpen } = useSelector(
    (state: RootState) => state.modal
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-dark-background p-6 rounded-xl shadow-lg max-w-md w-full ">
        <div className="flex justify-center flex-col gap-y-7">
          <h2 className="text-xl font-bold mb-4 flex justify-center text-dark-main">
            Statistics
          </h2>
          <Stats />

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
