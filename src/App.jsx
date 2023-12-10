
import './App.css'
// import Home from './components/land-page/Home'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// import About from './components/about/About';
// import Projects from './components/projects/Projects';
// import Contact from './components/contact/Contact';
import Root from './components/root/Root';
import { lazy } from 'react';

const Home = lazy(()=>import ('./components/land-page/Home'));
const About = lazy(()=>import ('./components/about/About'));
const Projects = lazy(()=>import ('./components/projects/Projects'));
const Contact = lazy(()=>import ('./components/root/Root'));

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
          path : '/projects',
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
