import {AiFillLinkedin , AiFillGithub } from 'react-icons/ai'
import { SiGmail } from "react-icons/si";
import {Container} from '@mui/material'
import './footer.css';
const Footer = () => {
 const arrLinks = [ 
        {icon :  <AiFillLinkedin /> , url : 'https://www.linkedin.com/in/mohamed-makawy-5b6b0723a/'},
        {icon :    <SiGmail /> , url : 'mailto:moohesham83@gmail.com?subject=Contact' }, 
        {icon : <AiFillGithub /> , url : 'https://github.com/makawy390'} ,
        ];
  return (
<div className='footer'>
       <Container fixed>
       <div className='flex-footer'>
            <h6>Copyright &copy; 2023 Mohamed Hesham. All Rights Reserves</h6>
            <ul>
            {arrLinks.map((arr, id)=> (
                    <li key={id}> <a href={arr.url} target="_blank" rel="noopener noreferrer">{arr.icon}</a></li>
                ))}
            </ul>
        </div>
       </Container>

    </div>
  )
}

export default Footer