import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,

    // USER_REVIEW_REQUEST,
    // USER_REVIEW_SUCCESS,
    // USER_REVIEW_FAIL
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

    export const userDetailsReducers =(state={user:{}} ,action)=>{
    
        switch(action.type){
            case USER_DETAILS_REQUEST: 
            //returning user object , empty array as we're loading data
                return {...state, loading: true }
    
            case USER_DETAILS_SUCCESS:
            //loading data sucessfull
                return { loading: false, user: action.payload}
            
            case USER_DETAILS_FAIL:
             // error attribute and response from payload
                return { loading:false, error: action.payload }
    
        

            default:
                return state
        }
    
    
    
    }

// port const userReviewReducers =(state={user:{}} ,action)=>{
    
//         switch(action.type){
//             case USER_REVIEW_REQUEST: 
//             //returning user object , empty array as we're loading data
//                 return {...state, loading: true }
    
//             case USER_REVIEW_SUCCESS:
//             //loading data sucessfull
//                 return { loading: false, user: action.payload}
            
//             case USER_REVIEW_FAIL:
//              // error attribute and response from payload
//                 return { loading:false, error: action.payload }
    
        

//             default:
//                 return state
//         }
    
    
    
//     }
    // ex