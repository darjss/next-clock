import { useState } from "react";

const Stopwatch = () => {
  const [clock, setClock] = useState({
    seconds: 0,
    minutes: 0,
    hour: 0,
  });
  let intervalId = null;
  const startStopwatch = () => {
    intervalId = setInterval(() => {
      if (clock.seconds < 59) {
        clock.seconds++;
      } else if (clock.minutes < 59) {
        clock.seconds = 0;
        clock.minutes++;
      } else {
        clock.minutes = 0;
        clock.hour++;
      }
      setClock({ ...clock });
    }, 100);
    console.log(intervalId);
  };
  const convert = (num) => {
    let strTime;
    num < 10 ? (strTime = "0" + num) : (strTime = num + "");
    return strTime;
  };
  // time();

  const stopHandler = () => {
    clearInterval(intervalId);
  };
  return (
    <div className="flex gap-3">
      <p className="text-3xl">
        {convert(clock.hour)}:{convert(clock.minutes)}:{convert(clock.seconds)}
      </p>
      <div className="flex gap-5">
        <button onClick={startStopwatch}>Start</button>
        <button
          onClick={() => {
            console.log(intervalId);
            clearInterval(intervalId);
            console.log(intervalId);
            intervalId = null;
            setClock({ ...clock });
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            clearInterval(intervalId);
            console.log(intervalId);
            intervalId = null;
            clock.hour = 0;
            clock.minutes = 0;
            clock.seconds = 0;
            setClock({ ...clock });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
