import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,Link} from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';
import { facebookSignInInitiate, googleSignInInitiate, loginInitiate } from '../redux/action';

export default function Login() {

  function handleGoogleSignIn(){ 
      dispatch(googleSignInInitiate());
  }

  const [state,setState] = useState({
    email:"",
    password:''
  });

  const {email,password} =state;
  const dispatch = useDispatch();
  
  const {currentUser} = useSelector((state) => state.user);
    const history = useNavigate();

    useEffect(()=>{
        if(currentUser){
          console.log(currentUser);
          history('/login/home');
        }
    },[currentUser,history])
  function handleChange (e){
    let {name, value}= e.target;
    setState({...state, [name]:value})
  }
  function handleFacebookSignIn(){
        dispatch(facebookSignInInitiate())

  }

  function handleSubmit(e){
      e.preventDefault();
    if(!email || !password){
      return
    }
    dispatch(loginInitiate(email,password));
    setState({email:'',password:''})
  }

  return (
    <div className='container trans' id='login'>
   <div className='cont'>   <div className='exrateMotto' data-text='With ExRate, Your Currency Counts...'> With ExRate, Your Currency Counts... </div></div>
     <div className='signing'>
     <div>
        <h1 className='h1'>
       Sign in
        </h1>
      <div className='flex'>
         <div>
         <button onClick={handleGoogleSignIn} className='google'>
              <span> 
                    <i className='fab fa-google-plus-g'></i> <span style={{fontFamily:'Poppins'}}>Sign in with Google+</span>
              </span>
            </button>
          </div>
          <div>
            <button onClick={handleFacebookSignIn} className='facebook'>
              <span> 
                    <i className='fab fa-facebook-f'></i> <span style={{fontFamily:'Poppins'}}>Sign in with Facebook</span>
              </span>
            </button>
          </div>
          </div>
          </div>
    
        < p className='or'> OR </p>
        <form onSubmit={handleSubmit} className = 'form'>
         
        <input className='email'
        type='email'
        id ='inputEmail'
        placeholder='Email Address'
        name='email'
        onChange={handleChange}
        value ={email}
        required
           />

        <input className='password'
        type='Password'
        id ='inputPassword'
        placeholder='Password'
        name='password'
        onChange={handleChange}
        value ={password}
        required
           />
        <button type='submit' className='signIn'>  <i className='fas fa-sign-in-alt'> <span style={{fontFamily:'Poppins', paddingLeft:'4px'}}>Sign In</span></i></button> 
          <Link to= '/login/forgetPassword'><button type='button' id='button-sign' className='link'style={{fontFamily:'Poppins'}}>Forgot Password?</button></Link>

          <ToastContainer/>
          
          <p className='account'> Don't have an account?</p>
          
        
          <Link to ='/login/register'>
              <button type='button' id='button-sign' className='signUp'>
                    <p classname='fas fa user-plan' style={{fontFamily:'Poppins'}}>Sign up New Account</p>
              </button>
         </Link>


       </form>
       </div>
    </div>
  )
}
 


/*

 <button onClick={handleFacebookSignIn}>
              <span> 
                    <i className='fab fa-facebook-f'></i> Sign in with Facebook
              </span>
            </button>


                  <button onClick={handleGoogleSignIn}>
              <span> 
                    <i className='fab fa-google-plus-g'></i> Sign in with Google+
              </span>
            </button>
*/