import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);

  const addValue=() =>{
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const removeValue=() =>{
    if(counter >0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <h1>Amrit Raj's basic counter project</h1>

    <button onClick={addValue}>Increase Value {counter}</button>
    <br />
    <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
