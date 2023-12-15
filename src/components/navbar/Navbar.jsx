import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import {FaCircleUser} from 'react-icons/fa6';
// import {BsBookmarkStarFill} from 'react-icons/bs'
import {BsJournalBookmarkFill} from 'react-icons/bs'

// import { Container } from '@mui/material';
import './nav.css'
// import { useState } from "react";
const Navbar = () => {

  return (
   <div className='navigation'>
      <ul className='list-navigation'>
       <li><NavLink to='/'><AiTwotoneHome  />{/*<span>Home</span>*/} </NavLink> </li>
       <li><NavLink to='/about'  ><FaCircleUser  />{/*<span>About</span>*/}</NavLink> </li>
       <li><NavLink to='/skills'  ><BsJournalBookmarkFill />{/*<span>About</span>*/}</NavLink> </li>
       <li><NavLink to='/portfolio'  ><BiSolidContact /> {/*<span>Portfolio</span>*/}</NavLink> </li>
       <li><NavLink to='/contact' ><FcContacts /> {/*<span>Contact</span> */}</NavLink> </li>
      </ul>

   </div>
  )
}

export default Navbar