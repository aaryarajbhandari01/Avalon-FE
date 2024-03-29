// import { combineReducers} from 'redux';
// import {productListReducers,productDetailsReducers} from '../reducers/productReducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// // import { cartReducer } from './reducers/cartReducers';
// // import { userLoginReducers } from './reducers/userReducers';
// // import { userRegisterReducers } from './reducers/userReducers';


// import { cartReducer } from './reducers/cartReducers';
import { combineReducers } from 'redux';
import { userDetailsReducers, userLoginReducers , userRegisterReducers} from '../reducers/userReducers';


const reducer = combineReducers({
    // cart:cartReducer,
    // registering login reducer and reducer
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    userDetails:userDetailsReducers,
})



//geting userinfo
const userInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')): null //null if cant find user 

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?
// JSON.parse(localStorage.getItem('shippingAddress')): null //null if cant find user 


//seting userInfo in state
const initailState = {
   // cart:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage} 

}


const store = configureStore({
    reducer,
    preloadedState:initailState,
    middleware:[thunk]
})




export default store;