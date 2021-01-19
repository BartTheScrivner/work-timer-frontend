import React from 'react'
import Timer from '../Timer/Timer'

export default function Task() {
    const handleStop = (start, end, total) => {
        console.log('start: ', start, 'end: ', end, 'total: ', total)
        // let request = {
        //   method: "POST",
        //   headers: {
        //   "Content-Type": "application/json",
        //   Accept: "application/json"
        //   },
        //   body: JSON.stringify({start, end, total})
        //   }
        //   fetch(`http://localhost:3000/sessions`, request)
        //   .then(r => r.json())
        //   .then(data => this.handleResponse(data))
    }
    return (
        <div className="task">
            <h2>Task Name:</h2>
            <Timer handleStop={handleStop}/>
        </div>
    )
}