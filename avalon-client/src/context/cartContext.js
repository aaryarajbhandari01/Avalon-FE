//global store for cart 

// import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer"



const CartContext = createContext();

//add data in localStorage
//set
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("avalonCart");
    // if(localCartData === []){
    if(localCartData !== []){
        return [];
    } else { //if not empty
        return JSON.parse(localCartData); // complete array data (parsing to original)
    }
};

//defining initialState Object
const initialState = {
    // cart : [],
    cart: getLocalCartData(), //calling function to get local storage data of cart
    total_item: "", //total cart item
    total_price:"", //for cart
    shipping_fee: 100,
    coupon_code:"",

}

//provider method
const CartProvider = ({children}) => {

    //creating reducer for cart
    const [state, dispatch] = useReducer(reducer, initialState);

    //add to cart item method
    const addToCart= (id, {color:selectedColor}, {size:selectedSize}, amount, product) =>{ //parameters of add to cart
        dispatch({type:"ADD_TO_CART", payload:{id, color: selectedColor, size: selectedSize, amount, product}}) //passing data
    };

    //increment
    const setIncrease = (id) =>{//getting parameter
        dispatch({type:"SET_INCREASE", payload: id});
    }
    //decrement
    const setDecrease = (id) =>{//getting parameter
        dispatch({type:"SET_DECREASE", payload: id});
    }

    //remove individual cart item method
    const removeItem = (id) => { //getting the passed argument(removeItem) from CartItem.jsx as parameter
        dispatch({type:"REMOVE_ITEM", payload: id});
    }

    //to clear cart
    const clearCart = () =>{
        dispatch({type:"CLEAR_CART"});
    }

    //coupon

    // const getCoupon = async (url) => {
    //     dispatch({type:"SET_SINGLE_LOADING"});
    //     try {
    //         const res = await axios.get(url);
    //         const couponCode = await res.data; //getting axios data object

    //         console.log(
    //             "Avalon ~ file:s ~ getSigetCouponngleProduct ~ res",
    //             couponCode 
    //         );

    //         dispatch({type:"SET_SINGLE_PRODUCT", payload: couponCode});

    //     } catch (error){
    //         dispatch({type:"Coupon_ERROR"});

    //     }
    // }

    
    // useEffect(() => {
    //     getCoupon("http://127.0.0.1:8000/api/order/coupon-check/"); //getting and passing  API as an Argument 
    // },[]);

    // //add data in localStorage
    //set
    useEffect(()=>{
        // dispatch({type:"CART_TOTAL_ITEM"}); //reduce method to find total cart quantity
        // dispatch({type:"CART_TOTAL_PRICE"}); // for order total price
        dispatch({type:"CART_TOTAL_PRICE_ITEM"});
        localStorage.setItem("avalonCart", JSON.stringify(state.cart)) //key (avalonCart), and converting to string (jsonstringify) and value (initialState cart)
    }, 
    [state.cart] //new added item will be added in localStorage cart
    );

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart,setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
};


//creating global context hook
const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};