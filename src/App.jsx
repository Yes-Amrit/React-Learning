// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import './App.css'

function App() {
  // let counter = 10
  let [counter, setCounter] = useState(15);

  const addValue =() =>{
    console.log("Clicked",Math.random());
    counter = counter + 1
    setCounter(counter);
  }
  const removeValue =() =>{
    console.log("Clicked",Math.random());
    counter = counter - 1
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}


export default App
