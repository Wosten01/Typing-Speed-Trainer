import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ArrowButton from "../Buttons/ArrowButton";
import ReloadButton from "../Buttons/ReloadButton";
import Stats from "./Stats";
import { useRef, useEffect } from "react";

interface ModalProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleNextText: () => void;
  handleRestart: () => void;
}

/**
 * A modal window for displaying statistics.
 */
function Modal({ handleNextText, handleRestart }: ModalProps) {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const modalRef = useRef<HTMLDivElement>(null);

  // Closing the modal window when clicking outside the window
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleRestart();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="bg-dark-background p-6 rounded-xl shadow-lg w-11/12 max-w-xs sm:max-w-md"
      >
        <div className="flex justify-center flex-col gap-y-7">
          <h2 className="text-xl sm:text-2xl  tracking-wide font-bold font-mono flex items-center justify-center text-dark-main">
            Statistics
          </h2>
          <Stats />

          <div className="flex justify-around">
            <ReloadButton
              onClick={handleRestart}
              size={{
                width: 30,
                height: 30,
              }}
              title="Restart Test"
            />
            <ArrowButton
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
