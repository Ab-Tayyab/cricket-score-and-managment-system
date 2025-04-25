import React from 'react'
import './LiveScoring.css'

const LiveScoring = () => {
  return (
    <div >
      {/* overview panel  */}
      <div className='overview-panel'>
        <div>
          <h1 className='panel-heading'>Team A VS Team B</h1>
          <p>T20 Match. Match No 120. Lahore.</p>
        </div>
        <div className='overview-score'>
          <h1 className='panel-heading'>Team B: 92/3 (12.4)</h1>
          <p>CRR: 7.66. Target:199</p>
        </div>
        <div>
          <button className='end-btn'>End</button>
          <button className='pause-btn'>Pause</button>
        </div>
      </div>
      {/* Scoring panel  */}
      <div className='match-detail'>
        <div className='scoring-panel'>
          <h1 className='panel-heading'>Scoring Panel</h1>
          <div>
            <h5>Runs</h5>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>6</span>
          </div>
          <div>
            <h5>Extra</h5>
            <span>WD</span>
            <span>NB</span>
            <span>B</span>
            <span>LB</span>
          </div>
          <div>
            <button className='end-btn'>Wicket</button>
            <button className='pause-btn'>Undo</button>
          </div>
        </div>
        <div className='over-panel'>
          <div className='ball-detail'>
            <h1 className='panel-heading'>Current Over: 12.4</h1>
            <span>1</span>
            <span>4</span>
            <span>0</span>
            <span>W</span>
          </div>
          <div className='wicket-detail'>
            <h1 className='panel-heading'>Last Action</h1>
            <h5>Wicket</h5>
            <p>M.Tylor b A.Kumar 16(14)</p>
          </div>
          <div className='next-batsman'>
          <h1 className='panel-heading'>Next To Bat</h1>
          <p>M.Tylor</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LiveScoring