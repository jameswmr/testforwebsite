import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      
        <div class="title">
          <img src="../me.jpg" />
            <div class="title-header">
                <h1>Welcome to My Website</h1>
                <p>I'm a sophomore major in NTU CSIE.</p> 
                <p>Happy to see you guys!!!</p>
            </div>
        </div>
    </div>
  )
}

export default App
