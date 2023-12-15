
import './App.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Root from './components/root/Root';
import { lazy } from 'react';
const Home = lazy(()=>import ('./components/land-page/Home'));
const About = lazy(()=>import ('./components/about/About'));
const Projects = lazy(()=>import ('./components/projects/Projects'));
const Contact = lazy(()=>import ('./components/contact/Contact'));
const Skills = lazy(()=> import ('./components/skills/Skills')) 
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root />,
      errorElement :  <h2>Error..........</h2>,
      children : [
        {index : true , element : <Home />},
        {
          path : '/about',
          element : <About />
        },
        {
          path : '/skills',
          element : <Skills />
        },
        {
          path : '/portfolio',
          element : <Projects />
        },
        {
          path : '/contact',
          element : <Contact />
        },       
      ]
    },
   
  ])
  return (
    <>
    <RouterProvider router={router} />    
    </>
  )
}

export default App
