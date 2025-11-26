import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>

      <h1> Hello, World! </h1>
      <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>

    </>
  )
}

export default App
