import { useState } from 'react'
import ball from './assets/ball.gif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [position, setPosition] = useState({ top: "50%", left: "50%" })
  
  const imageClick = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10 + "%";
    const randomLeft = Math.floor(Math.random() * 80) + 10 + "%";
    setPosition({ top: randomTop, left: randomLeft });
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>
      </div>
      <h1>Don't let your memes be dreams</h1>
      <div className="card">
        <button>
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
}

export default App
