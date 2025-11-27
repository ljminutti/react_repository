import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const myAnimals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)


  function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function ListAnimalsL(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

function ListAnimalsLWithOperator(props) {
  return (
    <ul>
      {props.myAnimals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

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
      <ul>
        {animalsList}
      </ul>
      <h1>Animals: </h1>
      <List animals={animals} />
      <h1>Animals that start with L: </h1>
      <ListAnimalsL animals={animals} />
      <h1>Animals that start with L (using && operator): </h1>
      <ListAnimalsLWithOperator myAnimals={myAnimals} />
    </div>

    </>
  )
}

export default App
