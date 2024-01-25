import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const checkTime = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    console.log(time);
  };
  checkTime();
  return (
    <div>
      <div className="flex gap-2">
        <p>{time.toLocaleDateString()}</p>
        <p>{time.toLocaleTimeString()} </p>
      </div>

      <p>Ulaanbaatar Local Time GMT +8</p>
    </div>
  );
};
export default Clock;
