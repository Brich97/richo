import { useState, useEffect} from 'react'
import ball from './assets/ball.gif'
import sunflowers from './assets/sunflowers.png'
import './App.css'

//TODO: - on page load function to make ball fall down from top middle
//Change ball gif to be png and apply own rotations, see if that 
//resolves bug that comes from applying hover

function App() 
{
  const [count, setCount] = useState(0)
  const [position, setPosition] = useState({ top: "50%", left: "50%" })
  
  const imageClick = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10 + "%";
    const randomLeft = Math.floor(Math.random() * 80) + 10 + "%";
    setPosition({ top: randomTop, left: randomLeft });
    setCount((count) => count + 1);
  }

  //useEffect allows specific code to run when the value of a state variable changes.
  useEffect(() => {
    if (count === 10) 
    {
      const timeout = setTimeout(() => {
        //document.body.classList.add("new-background");
        alert("You've clicked the ball 10 times! 🎉");
        setCount(0); // Reset count
      }, 500); // Wait 500ms (this = transition duration)

      // Clear timeout, prevent memory leaks
      return () => clearTimeout(timeout);
      
      //TODO: 
      //additional things like sound? 
    }
  }, [count]); // Only run when count changes

  /*
  <div className="card">
        <button>
          count is {count}
        </button>
      </div>
  */

  return (
    <>
      <div>
      </div>
      <h1>Bounce The Ball...</h1>
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
        What's the worst that could happen?
      </p>
      <div className="sunflowers">
       {/* <img src={sunflowers} alt="Sunflowers Footer"/>*/}
      </div>
    </>
  )
}

export default App
