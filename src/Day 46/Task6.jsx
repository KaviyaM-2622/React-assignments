import React, { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default LiveClock;
