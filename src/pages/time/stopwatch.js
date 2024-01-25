import { useState } from "react";

const Stopwatch = () => {
  const [clock, setClock] = useState({
    seconds: 0,
    minutes: 0,
    hour: 0,
  });

  const startStopwatch = () => {
    const intervalId = setInterval(() => {
      setClock((prevClock) => {
        let newClock = { ...prevClock };
        if (newClock.seconds < 59) {
          newClock.seconds++;   
        } else if (newClock.minutes < 59) {
          newClock.seconds = 0;
          newClock.minutes++;
        } else {
          newClock.minutes = 0;
          newClock.hour++;
        }
        return newClock;
      });
    }, 1000);
    console.log(intervalId);

    setClock((prevClock) => ({ ...prevClock, intervalId }));
  };

  const stopHandler = () => {
    setClock((prevClock) => {
      clearInterval(prevClock.intervalId);
      console.log(prevClock.intervalId);
      return { ...prevClock, intervalId: null };
    });
  };

  const resetHandler = () => {
    setClock((prevClock) => {
      clearInterval(prevClock.intervalId);
      console.log(prevClock.intervalId);
      return {
        seconds: 0,
        minutes: 0,
        hour: 0,
        intervalId: null,
      };
    });
  };

  const convert = (num) => {
    let strTime;
    num < 10 ? (strTime = "0" + num) : (strTime = num + "");
    return strTime;
  };

  return (
    <div className="flex gap-3">
      <p className="text-3xl">
        {convert(clock.hour)}:{convert(clock.minutes)}:{convert(clock.seconds)}
      </p>
      <div className="flex gap-5">
        <button onClick={startStopwatch}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
