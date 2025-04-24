import React from 'react'
import './LiveScoring.css'

const LiveScoring = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Team A VS Team B</h1>
          <p>T20 Match. Match No 120. Lahore.</p>
        </div>
        <div>
          <h1>Team B: 92/3 (12.4)</h1>
          <p>CRR: 7.66. Target:199</p>
        </div>
        <div>
          <button>End</button>
          <button>Pause</button>
        </div>
      </div>
    </div>
  )
}

export default LiveScoring