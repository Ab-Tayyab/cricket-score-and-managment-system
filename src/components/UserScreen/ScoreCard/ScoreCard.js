import React from 'react'
import './ScoreCard.css'

const ScoreCard = () => {
  return (
    <div className='scorecard-container'>
      <div className='scorecard-container-child1'>
        <div className='live-match-container'>
          <h1 className='card-heading'>Live Score</h1>
          <div>
            <h2>Team A</h2>
            <span>136/4</span>
            <span>(17.3 Over)</span>
          </div>
          <div>
            <h2>Team A</h2>
            <span>136/4</span>
            <span>(17.3 Over)</span>
          </div>
          <div>
            <h2>Batsman: </h2>
            <span>Ab Tayyab 45(32)</span>
            <span>Ta Abdullah 40(50)</span>
          </div>
          <div>
            <h2>Bowler: </h2>
            <span>W.Akram 2/24 (3.4)</span>
            <div className='over-detail'>
              <span>2</span>
              <span>0</span>
              <span>0</span>
              <span>4</span>
            </div>
          </div>
        </div>
        <div className='summary-match-container'>
          <h1 className='card-heading'>Match Summary</h1>
          <span>Match No: 202</span>
          <span>Venue: Lahore</span>
          <span>Format: T20</span>
          <span>Toss: Team B (Elected To Bowl)</span>
        </div>
      </div>
      <div className='scorecard-container-child2'>
        <div className='runrate-match-container'>
          <h1 className='card-heading'>Run Rate</h1>
        </div>
        <div className='upcoming-match-container'>
          <h1 className='card-heading'>Upcoming Matches</h1>
          <div>
            <span>Team C VS Team D</span>
            <span>Tomorrow 01:14PM</span>
          </div>
          <div>
            <span>Team C VS Team D</span>
            <span>Tomorrow 01:14PM</span>
          </div> <div>
            <span>Team C VS Team D</span>
            <span>Tomorrow 01:14PM</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ScoreCard