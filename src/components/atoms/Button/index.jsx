import classNames from "classnames";
import React from "react";

const Button = ({ onClick, children, className, labelClassName }) => {
  const classes = classNames(
    className,
    `bg-blue-500 p-3 px-6 rounded-full hover:bg-blue-400 text-white flex items-center justify-center`
  );
  return (
    <button onClick={onClick} className={classes}>
      <span className={labelClassName}>{children}</span>
    </button>
  );
};

export default Button;
