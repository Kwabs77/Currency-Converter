import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate,Link} from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import {resetPasswordInitiate} from '../redux/action';


export default function ForgotPassword() {
  const [state,setState] = useState({
    email:"" });
  const {email} =state;

 const dispatch = useDispatch();
    const handleSubmit =  (e) =>{
        e.preventDefault();
       // dispatch(registerInitiate(email,password,displayName));
         dispatch(resetPasswordInitiate(email))
        setState({email:''})
       
    }

  
   /* const {currentUser} = useSelector((state) => state.user);
    const {error} = useSelector((state) => state.user);
    useEffect(()=>{
      if(error==false){
     //   toast.success('Check your mail to reset password!(check spam if the link is not in your inbox)')
      }
      
    },[error])  
    */
    // const history = useNavigate();



    const onChangeSubmit =(e)=>{
        let {name,value} = e.target;
        setState({...state, [name] : value})

    }

  return (
      <div className='container'>
      <div className='forgot'>
      <h1 className='f4'> Forgot Password </h1>
      <form onSubmit={handleSubmit} className='form'>
      <input className='fEmail'
      type='email'
      name= 'email'
      placeholder='Email Address'
      value={email}
      onChange={onChangeSubmit}
      required
      />
      <br/>
      <button disabled={!email} className ={ !email? 'nothing':'signIn'} style={{fontFamily:'Poppins', paddingLeft:'4px'}}>
        Submit 
      </button>
      </form>
      <button className='sign'>
        <Link to='/login' className='line' style={{fontFamily:'Poppins', paddingLeft:'4px'}}>
        Back
        </Link>
        
      </button>
      <ToastContainer/>
      </div>
</div>  )
}

/*
<input
      type='password'
      name= 'password'
      placeholder=' Password'
      value={password}
      onChange={onChangeSubmit}
      required
      />

*/
