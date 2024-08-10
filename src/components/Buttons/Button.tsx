interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick } : ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-lg bg-gray-800 text-dark-main px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;