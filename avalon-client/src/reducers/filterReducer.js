//filter reducer with state and action  parameter
const filterReducer = ( state, action ) => {

    switch(action.type){

        //case for filter action typ
        case "LOAD_FILTER_PRODUCTS":
            console.log(' filterReducer.js LOAD_FILTER_PRODUCTS payload',action.payload)
            return{
                ...state,
                //setting value using spread operator and putting then in array
                filter_products: [...action.payload], 
                all_products: [...action.payload],

            };

        case "SET_GRIDVIEW":
            return{
                ...state,
                grid_view:true,
            };

        case "GET_SORT_VALUE":
        //    let userSortValue = document.getElementById("sort"); //getting select form sort id
        //    let sort_value = userSortValue.options[userSortValue.selectedIndex].value; //getting option's selected index value
        //    console.log(sort_value)
            
            return{
                ...state,
                sorting_value:action.payload,
                // action.payload, //sort_value, //getting value data
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            // let tempSortProduct = [...action.payload];


            //destructure
            const{filter_products, sorting_value} = state;
            let tempSortProduct = [...filter_products];

            
             //function to sort products (Implementing DRY)
            const sortingProducts = (a, b) => { //compare function
            
                // //sorting numbers
                // if(state.sorting_value === "lowest"){
                //     return a.price - b.price; //for sorting price 
                // }

                 //sorting numbers
                 if(sorting_value === "lowest"){
                    return a.price - b.price; //for sorting price 
                }

                if(sorting_value === "highest"){
                    return b.price - a.price; //for sorting price 
                }

                 //comparing and sorting strings
                if(sorting_value === "a-z"){
                   return  a.name.localeCompare(b.name) //comparing a and b for ascending
                 };

                if(sorting_value === "z-a"){
                    return  b.name.localeCompare(a.name) //comparing a and b for descending
                };
            };



            newSortData = tempSortProduct.sort(sortingProducts);



        return{
            ...state,
            filter_products: newSortData, //sorted data
        }


        // for filters
        case "UPDATE_FILTERS_VALUE":
            const {name, value} = action.payload;

            return {
                ...state,
                filters:{
                    ...state.filters,
                     [name]: value, //users value
                },
            };

        case "FILTER_PRODUCTS":
            //filtering products
            let {all_products} = state; //destucture
            let tempFilterProduct = [...all_products];

            //for search bar and category
            const {
                text,
                category,
                color
            } = state.filters; //destructuring text and category of user

            //for search using text
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {//filtering through all data
                    return curElem.name.toLowerCase().includes(text); //searching through api name (includes/starsWith?)
                 } );
            }

            //if change in category value
                if (category !== "all") { // filterying category except "all"
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) =>  //filtering through api array data 
                    //compare the name field of the category object with the selected category value
                    curElem.category.name === category  //if curent category is equal to the category selected by user
                );
            console.log('tempFilterProduct',tempFilterProduct);

            }

            //if change in color value
if (color !== "all") {
    // filter products by color
    tempFilterProduct = tempFilterProduct.filter((curElem) =>
      curElem.color.some((colorObj) => colorObj.name === color)
    );
    console.log('tempFilterProduct color',tempFilterProduct);
  }

            return {
                ...state,
                filter_products: tempFilterProduct,
            };      

        default: 
            return state;
    }

};

export default filterReducer