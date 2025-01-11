import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contactus/Contactus.jsx'
import User from './components/User/User.jsx'
import Github, { getInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path:"/",
//   element: <Layout/>,
//   children:[
//     {
//       path:"",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element: <About/>
//     },
//     {
//       path:"/contactus",
//       element: <Contact/>
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''  element ={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<Contact/>} />
      <Route path='/user/:userid' element={<User/>} />
      <Route 
      loader ={getInfoLoader}
      path='/github' 
      element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
