
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducers"
import NewInstance from "../api/axiosInstance";

//creating a context

const AppContext = createContext();

// const API ="https://api.pujakaitem.com/api/products";
// const API="http://127.0.0.1:8000/api/product/all";
const API = 'http://127.0.0.1:8000/api/product/all/'

//creating a provider
const AppProvider =({ children }) => { //app component

    const initialState ={
        isLoading: false,
        isError: false,
        products:[],
        featuredProducts:[],  //empty array
        isSingleLoading: false,
        singleProduct : {},  //empty object
    }

    //useReducer hook to return 2 element of array (state and dispatch)
    const [state, dispatch] = useReducer(reducer, initialState)

    // getting URL as a parameterfor multiple products

    const getProducts = async (url)=>{
        dispatch({type:"SET_LOADING"});
        try{
             const res = await axios.get(url);
             const products = await res.data;

             dispatch({type:"SET_API_DATA",payload:products});

                console.log(
                    "A ~ file: productContext.js ~line 15 ~ getProducts ~ res",
                    products 
                );
            } catch (error){
                dispatch({type:"API_ERROR"});
            }
    };

    // 2nd API call for single product data

    const getSingleProduct = async (url) => {
        dispatch({type:"SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data; //getting axios data object

            console.log(
                "Avalon ~ file: productContext.js ~ getSingleProduct ~ res",
                singleProduct 
            );

            dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct});

        } catch (error){
            dispatch({type:"SET_SINGLE_ERROR"});

        }
    }

    
    useEffect(() => {
        getProducts(API); //getting and passing  API as an Argument 
    },[]);

    return(
        // spread operator to add initialState data
     <AppContext.Provider value={{...state, getSingleProduct}}> 
        {children}
    </AppContext.Provider>
    );
};

//creating a consumer =>useContext Hook

//custom hook
const useProductContext =()=>{
    return useContext(AppContext);
};

export {AppProvider, AppContext,useProductContext};