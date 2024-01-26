import { useState } from "react";

const Stopwatch = () => {
  const [clock, setClock] = useState({
    ms: 0,
    seconds: 0,
    minutes: 0,
    hour: 0,
  });

  const startStopwatch = () => {
    const intervalId = setInterval(() => {
      setClock((prevClock) => {
        let newClock = { ...prevClock };
        if (newClock.ms < 99) {
          newClock.ms++;
        } else if (newClock.seconds < 59) {
          newClock.ms = 0;
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
    }, 1);
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
        ms: 0,
        seconds: 0,
        minutes: 0,
        hour: 0,
        intervalId: null,
      };
    });
  };

  const convert = (num) => {
    let strTime = num + "";
    return strTime.padStart(2, "0");
  };

  return (
    <div className="pageBackground flexing">
      <p className="text-6xl">Stopwatch</p>
      <div className="bg-gray-800 w-[600px] h-[400px] flexing gap-10 rounded-xl">
        <p className="text-6xl">
          {convert(clock.hour)}
          <span className="graySmall">H</span>
          {convert(clock.minutes)}
          <span className="graySmall">M</span>
          {convert(clock.seconds)}
          <span className="graySmall">S</span>
          <span className="text-5xl">{convert(clock.ms)}</span>
        </p>
        <div className="flex gap-5">
        <button onClick={stopHandler}>Stop</button>
          <button className="w-[100px] h-100px] bg-indigo-600 rounded-full text-2xl" onClick={startStopwatch}>Start</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
