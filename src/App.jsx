import './App.css'
import'../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'

function App() {

  const routes = createBrowserRouter([
    { 
      path : "" , element :<Layout /> , children : [
      {index: true,element:<Home />},
      {path:"about",element:<About />},
      {path:"contact",element:<Contact />},
      {path:"Portfolio",element:<Portfolio />},
      {path:"*",element:<NotFound />}
    ]
  }
  ])

  return (
    <>
     <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
