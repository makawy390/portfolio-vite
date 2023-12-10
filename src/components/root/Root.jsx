// import React from 'react'
import Navbar from '../navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../footer/Footer'
import { Suspense } from 'react'
import './root.css'
const Root = () => {
  return (
    <>
     <Navbar />
     <div className='main'>
      <Suspense fallback={<h2>Load....</h2>}>
      <Outlet />
      </Suspense>
     </div>
     <Footer />
    </>
  )
}

export default Root