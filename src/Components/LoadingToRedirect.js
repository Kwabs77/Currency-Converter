import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function LoadingToRedirect() {
    const [count,setCount] =useState(3);
    const history = useNavigate();

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000)

        count===0 && history('/login');
        return ()=> clearInterval(interval)
    },[count, history])

  return (
    <div>Redirecting you in {count} seconds</div>
  )
}
