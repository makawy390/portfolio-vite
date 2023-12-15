import Navbar from '../navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../footer/Footer'
import { Suspense } from 'react'
import {useSelector} from 'react-redux'
// import {BiXCircle} from 'react-icons/bi'
import './root.css'
import SwitchApp from './Switch'
const Root = () => {
  // const [dark , setDark] = useState(false);
const mode = useSelector(state => state.mode.mode);
console.log(mode);
  return (
    <>
     <Navbar />
     <div className={`main ${mode===false?'':"dark"}`}>
      <SwitchApp />
      <Suspense fallback={<h2>Load....</h2>}>
      <Outlet />
      </Suspense>
     </div>
     <Footer />
    </>
  )
}

export default Root