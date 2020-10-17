import React from 'react'
import Timer from './Timer'

export default function Task() {
  const handleStop = (start, end) => {
    let request = {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify({start, end})
      }
      fetch(`http://localhost:3000/sessions`, request)
      .then(r => r.json())
      .then(data => this.handleResponse(data))
  }
  return (
    <div>
      <h2>Task Name:</h2>
      <Timer handleStop={handleStop}/>
    </div>
  )
}
