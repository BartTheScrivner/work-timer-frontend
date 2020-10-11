import React, { useState, useRef } from "react";

export default function Timer() {
  //total time counted
  const [total, setTotal] = useState(0);
  //the Unix time when the timer is started
  const [start, setStart] = useState(0);
  //the incrementing Unix time whose difference from #start determines the time elapsed
  const [count, setCount] = useState(0);
  //boolean to keep track of play/pause
  const [counting, setCounting] = useState(false);
  const counter = useRef(null);

  const toggleCounter = () => {
    //if not counting (and therefore wishing to start), capture a start time and a count time whose initial difference from #start is 0
    if (!counting) {
      setStart(new Date().getTime());
      setCount(new Date().getTime());
      setCounting(true);
    //begin incrementing #count every 100ms
      counter.current = setInterval(incrementTimer, 100);
    //if counting (and therefore wishing to pause), reset state, increment total, and stop incrementing #count
    } else {
      setStart(0);
      setCount(0);
      setCounting(false);
      setTotal(total + (count - start));
      clearInterval(counter.current);
    }
  };

  //this function updates the time stored at #count to the current time
  const incrementTimer = () => {
    setCount(new Date().getTime())
  }

  const formatTime = () => {
    const difference = (count - start) + total
    const getSeconds = `0${Math.floor((difference % (1000 * 60)) / 1000)}`.slice(-2);
    const getMinutes = `0${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    const getHours = `0${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="timer">
      <h2 className="count">{formatTime()}</h2>
      <button className="pause-play" onClick={toggleCounter}>
        {counting === false ? "START" : "PAUSE"}
      </button>
    </div>
  );
}
