import {Switch} from '@mui/material';
import {useDispatch} from 'react-redux'
import { changeMode } from '../../redux/reducer/createSlice';
const SwitchApp = () => {
 const dispatch = useDispatch();
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
   <>
      <Switch sx={{position:'absolute',right:0 }} {...label} 
       color='info' defaultChecked onClick={()=> dispatch(changeMode()) } />
   
   </>
  )
}

export default SwitchApp;