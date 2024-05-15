import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  function countPlus() {
    counter<20?setCounter(counter +1): 
    alert("value more than 20 is not allowed")
  }
  function countMinus() {
    if(counter>0){
      setCounter(counter -1);
    }
    else{
      alert("vlaue less then 0 is not allowed")
    }
    
  }
  return (
    <>
      <h1>chai our react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={countPlus}>Add value</button>
      <br />
      <button onClick={countMinus}>remove value</button>
    </>
  )
}

export default App
