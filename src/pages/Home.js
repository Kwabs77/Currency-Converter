import React ,{useEffect , useState}from 'react'
import ExchangeSum from '../Components/ExchangeSum';
import { useDispatch,useSelector} from 'react-redux';
import { logoutInitiate } from '../redux/action';
import {Link} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../Components/Header';
import Intro from '../Components/Intro';
import About from '../Components/About';
import Footer from '../Components/Footer';

export default function Home() {
  
  const {currentUser} =useSelector((state)=> state.user);
  const dispatch= useDispatch();
  const handleAuth=()=>{
    if(currentUser){
      dispatch(logoutInitiate())
    }
  }

  const [count,setCount] = useState(2)
  useEffect(()=>{
    const interval =setInterval(()=>{
        setCount((currentCount)=> --currentCount)
    },1000)

    count===0 &&  toast.success('Welcome! Your Currency Counts')
    return ()=> clearInterval(interval)
},[count])


   return (
    <>
    <Header handleAuth={handleAuth}/>
    <Intro/>
   
    <ExchangeSum/>
    <About/>
    <Footer/>
    <ToastContainer  toastStyle={{backgroundColor:'rgb(21,29,61)', color:'rgb(17,168,240)'}}/>
    </>
  )
}
