interface ReloadIconProps {
  onClick?: () => void;
  size: { width: number; height: number };
  title?: string;
}

/**
 * A button with a reboot icon.
 */
function ReloadButton({ onClick, size, title }: ReloadIconProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      className="flex items-center justify-center p-2 rounded-full transition-transform duration-300 ease-in-out hover:scale-125 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.width}
        height={size.height}
        viewBox="0 0 24 24"
        className="text-dark-secondary"
        fill="currentColor"
      >
        <path d="M 2 2 L 4.9394531 4.9394531 C 3.1262684 6.7482143 2 9.2427079 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 6.486 17.514 2 12 2 L 12 4 C 16.411 4 20 7.589 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 9.7940092 4.9004767 7.7972757 6.3496094 6.3496094 L 9 9 L 9 2 L 2 2 z"></path>
      </svg>
    </button>
  );
}

export default ReloadButton;
