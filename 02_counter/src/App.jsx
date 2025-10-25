import { useState } from 'react'
import './App.css'


function App() {
 let [counter , setCounter] = useState(15) 
  // let counter = 15;
  
  let addCounter = () => {
    if(counter < 20) {
    setCounter(counter + 1)
    }
    else {
      alert("counter is max out")
    }
  }
  let removeCounter = () => {
    if(counter > 0) {
    setCounter(counter - 1)
    }
    else {
      alert("counter in min out")
    }
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter : {counter}</h2>
     <button onClick={addCounter}>Add Counter {counter}</button>
     <br />
     <br />
     <button onClick={removeCounter}>Remove Counter {counter}</button>

     <p>Footer : {counter}</p>
    </>
  )
}
export default App
