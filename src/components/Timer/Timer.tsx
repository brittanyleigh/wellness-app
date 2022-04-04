import React, { useEffect, useState } from 'react';

export const Timer = (): JSX.Element => {
  const [seconds, setSeconds] = useState(25);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(25);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="row">
      <div className="time">{seconds}s</div>
      <button
        type="button"
        className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
        onClick={toggle}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button type="button" className="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
