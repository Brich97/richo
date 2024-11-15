import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ball from './assets/ball.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [position, setPosition] = useState({ top: "50%", left: "50%" })
  
  const imageClick = () => {
    console.log("Ball image clicked!")
    const randomTop = Math.floor(Math.random() * 80) + 10 + "%";
    const randomLeft = Math.floor(Math.random() * 80) + 10 + "%";
    setPosition({ top: randomTop, left: randomLeft });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Don't let your memes be dreams</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="ball">
      <a>
          <img
            src={ball}
            className="ball"
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -50%)"
            }}
            onClick={imageClick}
            alt="Clickable ball"
          />
        </a>
      </div>
      <p className="click-ball">
        Click the ball
      </p>
    </>
  )
} //TO DO - MAKE BALL MOVE SEAMLESSLY

export default App
