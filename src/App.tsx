import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { SunTracker } from "./components/Tracker"

function App() {
  const [percentage, setPercentage] = useState(50)

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(event.target.value)
    setPercentage(value)
  }

  return (
    <div className="app">
      <div className="chart-box">
        <SunTracker percentage={percentage} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          className="input--range"
          type="range"
          onChange={handleSlider}
          min={0}
          max={100}
          value={percentage}
        />
        <span>{percentage}%</span>
      </div>
    </div>
  )
}

export default App
