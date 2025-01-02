
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { use } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numAllowed) str+= '0123456789'
    
    if(charAllowed) str+= '!@#$%^&*-_+=[]{}~`'

    for (let i = 1; i <= length; i++) {
      pass+= str[Math.floor(Math.random()*str.length)]
    }

    setPassword(pass)

  } , [length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    //for copying to clipboard window obj is used , select and setslectionrange are used together 
    // for displayng and selecting the text that is to be copied  
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password.slice(0,4))
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button name='copy' className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div name="bottom bar" className="flex text-sm gap-x-2 items-center">
          <div name="slider" className="flex items-center gap-x-1">
            <input name='slider' type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setlength(e.target.value)}}/>
            <label htmlFor="slider">length: {length}</label>
          </div>
        <div name="checkbox" className='flex items-center gap-x-1'>
          <input type="checkbox" className='cursor-pointer' name="number" id="numberAllowed" defaultChecked={numAllowed} onChange={()=>{
            setNumAllowed((prev) => !prev)
          }} />
          <label htmlFor="number">Numbers</label>
        </div>
        <div name="checkbox" className='flex items-center gap-x-1'>
          <input type="checkbox" className='cursor-pointer' name="cahr" id="charAllowed" defaultChecked={charAllowed} onChange={()=>{
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="char">Characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
