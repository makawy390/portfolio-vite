import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import './nav.css'

const Navbar = () => {


  return (
   <div className='navigation'>
<Container fixed>
      <ul className='list-navigation'>
       <li><NavLink to='/' value="home" ><AiTwotoneHome /> </NavLink><span>Homr</span> </li>
       <li><NavLink to='/about' value="About" ><FcAbout /></NavLink><span>About</span> </li>
       <li><NavLink to='/projects' value='Projects' ><BiSolidContact /> </NavLink> <span>Projects</span></li>
       <li><NavLink to='/contact' value="Contact"><GrProjects /> </NavLink><span>Contact</span> </li>
      </ul>
</Container>

   </div>
  )
}

export default Navbar