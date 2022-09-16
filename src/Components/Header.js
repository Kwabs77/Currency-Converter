import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg';
import { useState } from "react";
import PhoneMenu from './PhoneMenu';
//import {Link} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';



export default function Header({handleAuth}) {
  
const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <div  className='Header'>
           <span className='Ex'>ExRate</span>
        <div className='list'>
             <ul>                       
                <li><button className='hover'><Link className='hover' to='#home' smooth>Home</Link></button></li>
                <li><button className='hover'><Link className='hover' to='#about' smooth>About</Link></button></li>
                <li><button className='hover'><Link  className='hover' to ='#currency' smooth>Currency API</Link></button></li>
                <li><button className='hover'><Link className='hover' to='#amali' smooth>Sponsors</Link></button></li>           
            </ul>           
        </div>          
        <div className='to-the-end'>  
            <ul>
                <li><button id='login' onClick={handleAuth}><Link to = '/' className='login'>Log Out </Link></button></li>
            
            </ul>
        </div>
        <div className='ham'>
            <button onClick={()=>setIsOpen(!isOpen)}><img src={ham}/></button>
        </div>
    </div>
   {isOpen && <PhoneMenu onHandleClick={setIsOpen} isOpen={isOpen} handleAuth={handleAuth}/>}
   
    </>
  )
}
