import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,Link} from 'react-router-dom';
import {registerInitiate} from "../redux/action"

export default function Register() {
  
 
    const [state,setState] = useState({
      displayName:"",
      email:'',
      password:'',
      passwordConfirm:""
    });
  
    const {currentUser} = useSelector((state) => state.user);
    const history = useNavigate();

    useEffect(()=>{
        if(currentUser){
          console.log(currentUser);
          history('/login/home');
      
             }
    },[currentUser,history])


    const {email,password,displayName,passwordConfirm} =state;
    const dispatch = useDispatch();

    function handleChange(e){
        let {name, value}= e.target;
        setState({...state, [name]:value})
  
    }
   
    function handleSubmit(e){
  
            e.preventDefault();
        if(password!==passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email,password,displayName));
        setState({email:'',displayName:"", password:'', passwordConfirm:''})
        
      }
  return (

    <div className='container'>
         <div className='signing mTop'>
    <form onSubmit={handleSubmit} className='form'>
     <h1 className='h'>
    Sign Up
     </h1>
    
     <input className='email'
     type='text'
     id ='displayName'
     placeholder='Full name'
     name='displayName'
     onChange={handleChange}
     value ={displayName}
     required
        />
     
     <input className='password'
     type='email'
     id ='inputEmail'
     placeholder='Email Address'
     name='email'
     onChange={handleChange}
     value ={email}
     required
        />

     <input className='password'
     type='password'
     id ='inputPassword'
     placeholder='Password'
     name='password'
     onChange={handleChange}
     value ={password}
     required
        />

<input className='password'
     type='Password'
     id ='passwordConfirm'
     placeholder='Confirm Password'
     name='passwordConfirm'
     onChange={handleChange}
     value ={passwordConfirm}
     required
        />
     <button type='submit' className='signIn'>   <i className='fas fa-user-plus'> <span style={{fontFamily:'Poppins', paddingLeft:'2px'}}>Sign Up</span></i></button>
     
    </form>
    <button className='sign'><Link to = '/login' className='link'>
     <i className='fas fa-angle-left'></i> <span style={{fontFamily:'Poppins', paddingLeft:'1px'}}>Back</span>
     </Link>
     </button>
    </div>
 </div>

  )
}
