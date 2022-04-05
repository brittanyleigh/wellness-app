import { Box, Button } from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

export const Timer = (): JSX.Element => {
  const time = 25;
  const [seconds, setSeconds] = useState(time * 60000);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(time * 60000);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1000);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Box>
      <div className="time">{dayjs(seconds).format('m:ss')}</div>
      <Button type="button" onClick={() => toggle()}>
        {isActive ? 'Pause' : 'Start'}
      </Button>
      <Button type="button" onClick={() => reset()}>
        Reset
      </Button>
    </Box>
  );
};
