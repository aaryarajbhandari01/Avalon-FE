// import { combineReducers} from 'redux';
// import {productListReducers,productDetailsReducers} from '../reducers/productReducers';
import { configureStore } from '@reduxjs/toolkit';
// // import { cartReducer } from './reducers/cartReducers';
// // import { userLoginReducers } from './reducers/userReducers';
// // import { userRegisterReducers } from './reducers/userReducers';


// import { cartReducer } from './reducers/cartReducers';
import { combineReducers } from 'redux';
import { userLoginReducers } from '../reducers/userReducers';


const reducer = combineReducers({
    // cart:cartReducer,
    // registering login reducer and reducer
    userLogin:userLoginReducers,
    // userRegister:userRegisterReducers,
})



//geting userinfo
const userInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')): null //null if cant find user 


//seting userInfo in state
const initailState = {
   // cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage} 
}


const store = configureStore({
    reducer,
    initailState
})


export default store;