import React, {useState} from 'react'

export default function Timer() {
  let [count, setCount] = useState(0)
  const [counter, setCounter] = useState(null)
  const [counting, setCounting] = useState(false)
  const toggleCounter = () => {
    if (!counting) {
      setCounter(setInterval(() => {
        setCount(count+=1)
      }, 1000))
      setCounting(true)
    } else {
    clearInterval(counter)
    setCounting(false)
  }
}
  return (
    <div>
      <h2 className="count">
        {count}
      </h2>
  <button onClick={toggleCounter}>{counting === false ? "START" : "PAUSE"}</button>
    </div>
  )
}
