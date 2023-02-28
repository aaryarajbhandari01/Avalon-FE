const ProductReducer = (state, action) => {

//    if (action.type === "SET_LOADING"){
//     return {
//         ...state,
//         isLoading: true,
//     };
//    }


//    if (action.type === "API_ERROR"){
//         return{
//             ...state,
//             isLoading: false,
//             isError:true,
//         }
//     }
    switch (action.type) {
        case "SET_LOADING":
            return {
                 ...state,
                isLoading: true,
            };


        case "SET_API_DATA":

            //filtering data whose isFeatured property is true
            const featureData = action.payload.filter((currentElem) =>{
                return currentElem.isFeatured === true; 
            });

            return{
                ...state,
                isLoading: false,
                // adding api data to empty array w/ help of action and dispatch
                products: action.payload,
                // for adding api data only if the featured data is true
                featuredProducts: featureData
            }

        case "API_ERROR":
            return{
            ...state,
            isLoading: false,
            isError:true, 
          };

        // for single product

        case "SET_SINGLE_LOADING":
            return {
                 ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_PRODUCT":
            console.log('file: productReducer single product payload->',action.payload)

            return {
                    ...state,
                isSingleLoading: false,
                singleProduct : action.payload, 
            };

        case "SET_SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading: false,
                isError:true, 
              };
    
        default:
            return state;
    }

};

export default ProductReducer;

// import { 
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_LIST_FAIL,  
//     PRODUCT_DETAILS_REQUEST,
//     PRODUCT_DETAILS_SUCCESS,
//     PRODUCT_DETAILS_FAIL } from '../constants/ProductConstants'

// export const productReducers =(state={products:[]},action)=>{

//     switch(action.type){
//         case PRODUCT_LIST_REQUEST: 
//         //returning product object , empty array as we're loading data
//             return {loading:true,products:[]}

//         case PRODUCT_LIST_SUCCESS:
//         //loading data sucessfull
//             return {loading:false,products:action.payload}
//         case PRODUCT_LIST_FAIL:
//          // error attribute and response from payload
//             return {loading:false,error: action.payload}

//         default:
//             return state
//     }



// }
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