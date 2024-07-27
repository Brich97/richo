import { useState, useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button';
import './App.css'
import {FaInstagram} from 'react-icons/fa'

const user = 
{
  name: 'Brittany Richards',
  imageUrl: 'https://imgur.com/a/DgWaVz5',
  imageSize: 90,
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>HOWDY THIS IS HEADING</h1>
     <a href="https://www.instagram.com/brittany.exe_/" target="_blank">
      <FaInstagram size={50} color="#E4405F" className='instagram'/>
         </a>
      <div>
        <a href="https://www.youtube.com/watch?v=qcbGyRwkiZo&ab_channel=USHKA" target="_blank">
          <img src="gnome.png" className="gnome" alt="The Gnome" />
        </a>
      </div>
      <div className="button">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="display-image">
        Click the Gnome child 
      </p>
      
    </>
  )
} //end

export default App
