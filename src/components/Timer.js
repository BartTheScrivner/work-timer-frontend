import React, { useState, useRef } from "react";

export default function Timer() {
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);
  const [counting, setCounting] = useState(false);
  const counter = useRef(null);

  const toggleCounter = () => {
    if (!start) {
      setStart(new Date().getTime());
      setCount(new Date().getTime());
    }
    if (!counting) {
      setCounting(true);
      counter.current = setInterval(handleTimer, 1000);
    } else {
      setCounting(false);
      setCurrent(current + (count - start));
      clearInterval(counter.current);
    }
  };

  const handleTimer = () => {
    setCount(new Date().getTime())
  }

  const formatTime = () => {
    const difference = (count || 0) - start
    const getSeconds = `0${Math.floor((difference % (1000 * 60)) / 1000)}`.slice(-2);
    const getMinutes = `0${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    const getHours = `0${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div>
      <h2 className="count">{formatTime()}</h2>
      <button onClick={toggleCounter}>
        {counting === false ? "START" : "PAUSE"}
      </button>
    </div>
  );
}
