import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

 } from '../constants/UserConstants'


    export const userLoginReducers =(state={},action)=>{
    
        switch(action.type){
            case USER_LOGIN_REQUEST: 
            //returning user object , empty array as we're loading data
                return { loading: true }
    
            case USER_LOGIN_SUCCESS:
            //loading data sucessfull
                return { loading: false, userInfo: action.payload}
            
            case USER_LOGIN_FAIL:
             // error attribute and response from payload
                return { loading:false, error: action.payload }
    
            case USER_LOGOUT:
                return{} //clearing user info

            default:
                return state
        }
    
    
    
    }

    export const userRegisterReducers =(state={} ,action)=>{
    
        switch(action.type){
            case USER_REGISTER_REQUEST: 
            //returning user object , empty array as we're loading data
                return { loading: true }
    
            case USER_REGISTER_SUCCESS:
            //loading data sucessfull
                return { loading: false, userInfo: action.payload}
            
            case USER_REGISTER_FAIL:
             // error attribute and response from payload
                return { loading:false, error: action.payload }
    
            case USER_LOGOUT:
                return{} //clearing user info

            default:
                return state
        }
    
    
    
    }

