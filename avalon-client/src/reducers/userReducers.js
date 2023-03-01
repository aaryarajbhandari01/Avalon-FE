import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
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

    // export const productDetailsReducers = (state={ product:{reviews:[]} },action) =>{
    
    //     switch(action.type){
    //         case PRODUCT_DETAILS_REQUEST:
    //             return {loading:true,...state}
    
    //         case PRODUCT_DETAILS_SUCCESS:
    //             return {loading:false,product:action.payload}
                
    //         case PRODUCT_DETAILS_FAIL:
    //             return {loading:false, error: action.payload }
    
    //         default:
    //             return state
    //     }
    
    // }