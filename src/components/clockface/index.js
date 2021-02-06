import React from "react";
import "./style.css";

const ClockFace = ({ time }) => {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - hours * 60;
  const seconds = time % 60;

  const formatted = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  return <div className="clockface">{formatted}</div>;
};

export default ClockFace;
