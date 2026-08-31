import { useEffect, useState } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  const clockHandler = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const intervalID = setInterval(clockHandler, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <div id="clock">
        <span id="hour">{date.getHours()}</span>
        <span>:</span>
        <span id="minutes">
          {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
        </span>
      </div>
    </>
  );
};
