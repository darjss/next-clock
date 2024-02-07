import { useState } from "react";
const Timer = () => {
  const [edit, setEdit] = useState(true);
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hour: 0,
  });
  const startTimer = () => {
    console.log(time);
  };
  return (
    <div>
      <div>
        <p>Hour</p>
        <input
          onChange={(e) => {
            time.hour = e.target.value;
          }}
          type="text"
          className="bg-slate-300"
        />
        <p>Min</p>
        <input
          onChange={(e) => {
            time.min = e.target.value;
          }}
          type="text"
          className="bg-slate-300"
        />
        <p>Sec</p>
        <input
          onChange={(e) => {
            time.sec = e.target.value;
          }}
          type="text"
          className="bg-slate-300"
        />
        <button onClick={startTimer}>start</button>
      </div>
    </div>
  );
};
export default Timer;
