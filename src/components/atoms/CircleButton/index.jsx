import React from "react";

const CircleButton = ({ onClick, children, className, labelClassName }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-200 text-gray-500 w-12 h-12 rounded-full hover:bg-gray-300 flex items-center justify-center ${className}`}
    >
      <span className={labelClassName}>{children}</span>
    </button>
  );
};

export default CircleButton;
