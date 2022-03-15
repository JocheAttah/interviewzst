import React from "react";
import "./button.scss";

const Button = ({ name }) => {
  return (
    <button
      className={`button button__container`}
    >
      {name}
    </button>
  );
};

export default Button;
