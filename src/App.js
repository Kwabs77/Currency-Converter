//import ExchangeSum from "./Components/ExchangeSum";
import React,{useEffect} from "react";
import {BrowserRouter,Routes ,Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
//import Login from "./pages/Login";
//import UserRoute from "./Components/UserRoute";
import LoadingToRedirect from "./Components/LoadingToRedirect";
import { useDispatch } from "react-redux";
import {auth} from './firebase';
import { setUser } from "./redux/action";


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
      auth.onAuthStateChanged((authUser) =>{
          if(authUser){
            dispatch(setUser(authUser))
          } else{
            dispatch(setUser(null))
          }

      })
  },[dispatch])
  return (
    <>
    <BrowserRouter>
       <div>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>       
          <Route exact path="/Currency-Converter/" element={<LoadingToRedirect/>}/>
          <Route exact path="/" element={<LoadingToRedirect/>}/>           
          <Route  path="/login/forgetPassword" element={<ForgotPassword/>}/>
          <Route  path="/login/home" element={<Home/>}/>
          <Route  path="login/register" element={<Register/>}/>         
        </Routes>
        </div>  
    </BrowserRouter>
   
    </>
  );
}

export default App;
