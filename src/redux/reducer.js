import * as types from "./actionTypes";


const initialState ={
        loading: false,
        currentUser:null,
        error:null
}



const userReducer = (state= initialState, action) =>{
    switch(action.type){
        case types.register_start:
        case types.login_start:
        case types.logout_start:
        case types.google_sign_in_start:
        case  types.facebook_sign_in_start:
        case types.forgotPasswordStart:
                return{
                        ...state,
                        loading:true
                }
        case types.logout_success:
                        return{
                        currentUser: null
                        }
        case types.set_user:
                return{
                ...state,
                loading: false,
                currentUser: action.payload
                }
        case types.register_success:
        case types.login_success:
        case types.google_sign_in_success:
        case types.facebook_sign_in_success:
                return{
                        ...state,
                        loading:false,
                        currentUser: action.payload
                };
        case types.forgotPasswordSuccess:
                return{
                        ...state,
                        loading:false,
                       error:false
                };
        case types.register_failed:
        case types.login_failed:
        case types.logout_failed:
        case types.google_sign_in_failed:
        case types.facebook_sign_in_failed:
        case types.forgotPasswordFailed:
                return{
                        ...state,
                       loading:false,
                       error:action.payload 
                }        

            default:
                return state;
        }
};

export default userReducer;