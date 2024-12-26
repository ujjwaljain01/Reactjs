import Card from './components/card'
import './App.css'

function App() {
  const obj = {
    age: 20
  }
  const arr = [1,2,3]
  //we can give custom properties to components for unique use
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <Card username='Ujjwal' hello={obj}/>
      <Card username='Priyanshu' arr = {arr}/>
    </>
  )
}

export default App
