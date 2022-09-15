import * as types from "./actionTypes";
import { auth, googleAuthProvider ,facebookAuthProvider} from "../firebase";
import { toast } from "react-toastify";

const registerStart =()=>({
    type:types.register_start
});

const registerSuccess = (user) =>({
    type: types.register_success,
    payload: user

});

const registerFail =(error) =>({
    type:types.register_failed,
    payload:error
});

const loginStart =() =>({
    type:types.login_start,
    
})

const loginSuccess=(user)=>({
    type:types.login_success,
    payload:user
})

const loginFail =(error)=>({
    type:types.login_failed,
    payload:error
})

const logoutStart =() =>({
    type:types.logout_start,
    
})

const logoutSuccess=()=>({
    type:types.logout_success
})

const logoutFail =(error)=>({
    type:types.logout_failed,
    payload:error
})

const googleSignInStart =() =>({
    type:types.google_sign_in_start,
    
})

const googleSignInSuccess=()=>({
    type:types.google_sign_in_success
})

const googleSignInFail =(error)=>({
    type:types.google_sign_in_failed,
    payload:error
})


const facebookSignInStart =() =>({
    type:types.facebook_sign_in_start,
    
})

const facebookSignInSuccess=()=>({
    type:types.facebook_sign_in_success
})

const facebookSignInFail =(error)=>({
    type:types.facebook_sign_in_failed,
    payload:error
})


const forgotPasswordStart =() =>({
    type:types.forgotPasswordStart,
    
})

const passwordResetSuccess=()=>({
    type:types.forgotPasswordSuccess,
   
    
})

const  passwordResetFailed=(error)=>({
    type:types.forgotPasswordFailed,
    payload:error
})


export const setUser = (user) => ({
    type:types.set_user,
    payload:user
})

export const registerInitiate = (email, password, displayName) => {
        return function (dispatch){
            dispatch(registerStart());
            auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))                
            }).catch((error)=> {dispatch(registerFail(error.message)); toast.error(error.message)})
        }
}

export const loginInitiate = (email, password) => {
    return function (dispatch){
        dispatch(loginStart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            
            dispatch(loginSuccess(user));
           
        }).catch((error)=> {dispatch(loginFail(error.message)); toast.error(error.message)})
    }
}


export const logoutInitiate = () => {
    return function (dispatch){
        dispatch(logoutStart());
        auth.signOut()
        .then((resp)=>
            dispatch(logoutSuccess())
        ).catch((error)=> {dispatch(logoutFail(error.message)); toast.error(error.message)})
    }
}


export const googleSignInInitiate = () => {
    return function (dispatch){
        dispatch(googleSignInStart());
        auth.signInWithPopup(googleAuthProvider).then(({user})=>{
            dispatch(googleSignInSuccess(user))
        }).catch((error)=> {dispatch(googleSignInFail(error.message)); /*toast.error(error.message)*/})
    }
}





export const facebookSignInInitiate = () => {
    return function (dispatch){
        dispatch(facebookSignInStart());
        auth.signInWithPopup(facebookAuthProvider.addScope("user_birthday,email")).then(({user})=>{            
            dispatch(facebookSignInSuccess(user))
        }).catch((error)=> {dispatch(facebookSignInFail(error.message)); /*toast.error(error.message)*/})
    }
}




export const resetPasswordInitiate = (email) => {
    return function (dispatch){
        dispatch(forgotPasswordStart());
     
        auth.sendPasswordResetEmail(email).then(()=>{
            //dispatch(passwordResetSuccess())
            toast.success('Check your mail to reset password!(check spam if the link is not in your inbox)');
        }).catch((error)=> {dispatch(passwordResetFailed(error.message)); toast.error(error.message)})
    }
}
