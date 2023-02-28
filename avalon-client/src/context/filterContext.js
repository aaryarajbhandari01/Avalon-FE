import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";

//create context for data sharing
const FilterContext = createContext();

const initialState = {
    filter_products: [],  //to display all api products in list view
    all_products: [], // using the data to filter
    grid_view: true,
    sorting_value:"lowest",
    filters:{
        text:"",
        category: "all",
        color:"all",
    }
}

// global provider function
export const FilterContextProvider = ({children}) => {

    //getting products data
    const { products } = useProductContext();
    console.log("file:filterContext.js products", products);

  
   //using usereducer hook to -> add data to filter context state variable 
   const [state, dispatch ] = useReducer(reducer, initialState); //filter reducer

  
      //to set grid view
      const setGridView = () =>{{
        return dispatch({type:"SET_GRIDVIEW"});
    }}

    // sorting function for products
    const sorting = (event) =>{
        let userValue = event.target.value;
        dispatch({type:"GET_SORT_VALUE",
         payload: userValue //passing data as payload
    });
    // console.log("file:filterContext.js sorting userValue->", userValue);

    };
   

    //update the filter values
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type:"UPDATE_FILTERS_VALUE", payload: {name, value} });

    };

    //to sort the products
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"}); //if "filter" is triggered in the state than dispatch
        dispatch({type:"SORTING_PRODUCTS"});
    },
    [
        products, 
        state.sorting_value, 
        state.filters //filter for product list data
    ]
    );

    //adding products data in filter_products state
    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
    },
    [products] //array dependency on products data to get products data
    );

return (
    <FilterContext.Provider value={
        { ...state ,
            setGridView, 
            sorting, 
            updateFilterValue
        }}>
        {children}
    </FilterContext.Provider>
    );
};


export const useFilterContext = () => {
    return useContext(FilterContext);
}