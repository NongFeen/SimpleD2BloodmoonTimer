import { useEffect, useState } from 'react'
import './App.css'

const FULL_DURATION_SECONDS = 60 * 60
const LANDMARK_CLEAR_MULTIPLIER = 0.8

const PREDICT_STEPS = [1, 2, 3, 4, 5]

function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, Math.round(totalSeconds))
  const minutes = Math.floor(clamped / 60)
  const seconds = clamped % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function App() {
  const [remainingSeconds, setRemainingSeconds] = useState(FULL_DURATION_SECONDS)
  const [landmarkClears, setLandmarkClears] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingSeconds((current) => (current > 0 ? current - 1 : 0))
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const handleLandmarkClear = () => {
    setRemainingSeconds((current) => current * LANDMARK_CLEAR_MULTIPLIER)
    setLandmarkClears((count) => count + 1)
  }

  const handleBossClear = () => {
    setRemainingSeconds(FULL_DURATION_SECONDS)
    setLandmarkClears(0)
  }

  return (
    <div className="timer-page">
      <h1>Blood Moon Timer</h1>
      <div className="time-display">{formatTime(remainingSeconds)}</div>
      <div className="landmark-count">Landmark Clears: {landmarkClears}</div>
      <div className="button-row">
        <button className="landmark-button" onClick={handleLandmarkClear}>
          Landmark Clear
        </button>
        <button className="boss-button" onClick={handleBossClear}>
          Boss Clear
        </button>
      </div>
      <table className="predict-table">
        <thead>
          <tr>
            <th>Next n Landmark</th>
            <th>Predict Time</th>
          </tr>
        </thead>
        <tbody>
          {PREDICT_STEPS.map((n) => (
            <tr key={n}>
              <td>{n}</td>
              <td>{formatTime(remainingSeconds * LANDMARK_CLEAR_MULTIPLIER ** n)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
