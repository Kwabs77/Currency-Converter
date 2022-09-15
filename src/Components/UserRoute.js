import React from 'react';
import {Route,Navigate,Outlet} from 'react-router-dom';
import { useSelector} from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
import Login from "../pages/Login";

export default function UserRoute({children,...rest}) {
    const {currentUser} =useSelector((state)=>state.user)
    console.log(currentUser)
    return  currentUser?   <Route {...rest}/>  :  <LoadingToRedirect />
        
        
}
    