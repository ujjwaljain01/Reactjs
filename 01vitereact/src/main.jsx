import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Name from './Name.jsx'

const username = "ujjwal"
function Myapp(){
  return (
    <div>
      <h1>custom react ! {username}</h1>
    </div>
  )
}

//does not work here because earlier we created a custom render to render this component 
//but now there is pre defined render that does not use objects like this
/*const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}*/

//jsx code that is creating a tag
const anotherElement = (
  <a href='https://google.com'>click me to visit google</a>
)

//creating an element using react 
//HTML tag -> attributes of tag -> children of tag 
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  <>
  <Myapp/>
  {ReactElement}  
  </>
)
