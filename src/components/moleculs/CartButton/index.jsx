import { CircleButton } from "@components/atoms/index";
import React from "react";
import "./index.css";

const CartButton = ({ total = 1, onClick }) => {
  return (
    <div className="cart-button flex flex-row justify-center">
      <CircleButton
        className="cart-button__btn"
        onClick={() => total > 1 && onClick(total - 1)}
      >
        -
      </CircleButton>
      <CircleButton className="cart-button__btn mx-0.5 pointer-events-none">
        {total}
      </CircleButton>
      <CircleButton
        className="cart-button__btn"
        onClick={() => onClick(total + 1)}
      >
        +
      </CircleButton>
    </div>
  );
};

export default CartButton;
