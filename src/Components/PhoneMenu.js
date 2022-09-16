
//import { useState } from "react";
//import  {useEffect} from 'react';
//import  {Header}  from './Header';
import {HashLink as Link} from 'react-router-hash-link';

export default function PhoneMenu({onHandleClick,isOpen, handleAuth}) {


  return (
    <>
  <div>
   <div className="phone">
            <ul>
                <li  onClick={()=>{onHandleClick(!isOpen)}}><Link className='phoneHover' to='#home' smooth>Home</Link></li>
                <li onClick={()=>{onHandleClick(!isOpen)}}><Link className='phoneHover' to='#about' smooth>About</Link></li>
                <li onClick={()=>{onHandleClick(!isOpen)}}><Link  className='phoneHover' to ='#currency' smooth>Currency API</Link></li>
                <li><div className="phoneLine"></div></li>
                <li onClick={()=>{onHandleClick(!isOpen)}}><Link className='phoneHover' to='#amali' smooth>Sponsors</Link> </li>
                <li><button  onClick={handleAuth}><Link to = '/'  className='phoneHover'>Log Out </Link></button></li> 
            </ul> 
    </div>
   
    
    </div>
    
    </>
  )
}
