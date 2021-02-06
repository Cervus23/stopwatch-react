import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import ClockFace from "../../components/clockface/";
import "./style.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isStarted) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    } else if (!isStarted && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStarted, time]);

  const start = () => {
    setIsStarted(true);
  };

  const wait = () => {
    setIsStarted(false);
  };

  const reset = () => {
    setIsStarted(false);
    setTime(0);
  };

  return (
    <div>
      <ClockFace time={time} />
      <div className="btn-container">
        <Button
          className="btn start-stop"
          text={isStarted ? `Stop` : `Start`}
          onClick={isStarted ? reset : start}
        />
        <Button
          className="btn wait"
          text={"Wait"}
          onClick={wait}
          disabled={!isStarted}
        />
        <Button
          className="btn reset"
          text={"Reset"}
          onClick={reset}
          disabled={!isStarted}
        />
      </div>
    </div>
  );
};

export default StopWatch;
