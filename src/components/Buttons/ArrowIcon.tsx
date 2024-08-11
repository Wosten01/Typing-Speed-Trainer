interface ArrowIconProps {
  onClick?: () => void;
  size: { width: number; height: number };
  title?: string;
}

function ArrowIcon({ onClick, size, title }: ArrowIconProps) {
  return (
    <button
      title={title}
      onClick={onClick}
      className="flex items-center justify-center p-2 rounded-full transition-transform duration-400 ease-in-out hover:scale-125 active:scale-95 colo"
    >
      <svg
        height={size.height}
        width={size.width}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
        className="text-dark-secondary"
        fill="currentColor"
      >
        <path
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
        />
      </svg>
    </button>
  );
}

export default ArrowIcon;
