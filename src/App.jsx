
import my from './assets/me.jpg'
import './App.css'

function App() {

  return (
    <div class="container">
      
        <div class="title">
          <img src={my} />
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
