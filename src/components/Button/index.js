import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <div className={className}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
