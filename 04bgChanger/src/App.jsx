import { useState } from "react"

function App() {
  
  const [color, setcolor] = useState('olive')

  return (
    <div className="w-screen h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2 py-2 rounded-xl gap-2 bg-white max-w-fit mx-auto">
        <div className="px-4 py-1 bg-red-600 rounded-full text-white">
            <button onClick={() => setcolor('red')}>Red</button>
        </div>
        <div className="px-4 py-1 bg-blue-600 rounded-full text-white">
            <button onClick={() => setcolor('blue')}>blue</button>
        </div>
        <div className="px-4 py-1 bg-green-600 rounded-full text-white">
            <button onClick={() => setcolor('green')}>green</button>
        </div>
        <div className="px-4 py-1 rounded-full text-white"
        style={{backgroundColor:'olive'}}>
            <button onClick={() => setcolor('olive')}>olive</button>
        </div>
        <div className="px-4 py-1 bg-gray-600 rounded-full text-white">
            <button onClick={() => setcolor('gray')}>gray</button>
        </div>
        <div className="px-4 py-1 bg-pink-400 rounded-full text-white">
            <button onClick={() => setcolor('pink')}>pink</button>
        </div>
        <div className="px-4 py-1 bg-purple-600 rounded-full text-white">
            <button onClick={() => setcolor('purple')}>purple</button>
        </div>
        <div className="px-4 py-1 rounded-full text-black"
        style={{backgroundColor: "lavender"}}>
            <button onClick={() => setcolor('lavender')}>lavander</button>
        </div>
        <div className="px-4 py-1 bg-white rounded-full text-black">
            <button onClick={() => setcolor('white')}>white</button>
        </div>
        <div className="px-4 py-1 bg-black rounded-full text-white">
            <button onClick={() => setcolor('black')}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
