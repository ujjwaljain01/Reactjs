import { useState } from 'react';
import './App.css'

function App() {
  //The value of counter is updating but not reflecting in the UI because re-render
  //the elements (manage state) by using hooks
  //let counter = 10

  //let/const[variable name , function name/convention] = hookname(value)
  let [counter , setcounter] = useState(15)

  const addValue = () =>{
    counter++
    if(counter<21){
      setcounter(counter)
    }
    else{
      alert('The value of counter cannot execeed 20')
    }
  }

  const removeValue = () =>{
    counter--
    if(counter>=0){
      setcounter(counter)    
    }
    else{
      alert('The value of counter cannot be in negative')
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br></br>
      <button onClick={removeValue}>decrease value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
