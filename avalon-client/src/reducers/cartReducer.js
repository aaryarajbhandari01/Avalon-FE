const cartReducer = (state, action) => {

  //add to cart
  if(action.type === "ADD_TO_CART"){
    let {id, color, size, amount, product} = action.payload;

    console.log("cartReducer.js - product", product);
    console.log("cartReducer.js - product", id);
    console.log("cartReducer.js - product", size);
    console.log("cartReducer.js - product", color);
    console.log("cartReducer.js - product", amount);

    //handling existing item in cart increment/ decrese
    //checking if product exist
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color.name + size.name
    );

    if (existingProduct){ //if exists

      let updatedProduct = state.cart.map((curElem) => {
          if(curElem.id === id + color.name + size.name){ //if matches
            let newAmount = curElem.amount + amount; //adding in existing amount(Item Qty)
             
            // for not adding amount more than in stock
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }

            return{
                ...curElem,
                amount: newAmount,
              };
            } else { //if does not match
              return curElem; //return current elem as it is
            }
         
      });

      return{
        ...state,
        cart : updatedProduct, //only updating existing product
      }

    } else { //as it is

      let cartProduct= { //object
          id:  id + color.name + size.name,//unique id for same product but diff size and color 
          name: product.name ,
          color,
          size,
          amount,
          image : product.images[0]?.image, //first image url
          price: product.price,
          max: product.quantity,
      };
      console.log('cart prodyct data ', cartProduct)
      
      return {
        ...state,
        cart : [...state.cart, cartProduct], //keeping the added data as it is in state.cart and adding new product w/o disturbing the products that are already added
        

      };
    }
  }

  //remove item from cart
  if(action.type === "REMOVE_ITEM"){

    //update cart state variable
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload //filtering through item and if id does not match then add those data to updatedCart
    );
    console.log('cart removed data ', updatedCart)


    return {
      ...state,
      cart: updatedCart, 

    }
  }

  //to set decrease and increase qty amount
  if (action.type === "SET_DECREASE"){
    let updatedProduct = state.cart.map((curElem) => {

      if(curElem.id === action.payload){
        // console.log(curElem);
        let decAmount = curElem.amount - 1;

        //should not be decreased to less than 1
        if(decAmount <= 1){
          decAmount = 1;
        }

        return{
          ...curElem,
          amount: decAmount,
        };
      } else { //if doesnt match the current element
        return curElem; //keep as it is
      }

    });

    return { //returning after map method
      ...state,
      cart: updatedProduct //keep updated product as it is
    }
  }

  
  if (action.type === "SET_INCREASE") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) { // available st ock value is max
          incAmount = curElem.max;
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, 
      cart: updatedProduct };
  }

  //clear cart
  if(action.type === "CLEAR_CART"){
    return{
      ...state,
      cart: [],
    };
  }

  //total cart item
  if(action.type === "CART_TOTAL_ITEM"){
    let updatedItemVal = state.cart.reduce((initialVal, curElem)=>{ //using reduce method

      let {amount} = curElem; //currElem i.e cart

      //adding item cart quantity 
      initialVal = initialVal + amount;
      return initialVal;

    }, 0); //initial value is 0

    return{
      ...state,
      total_item: updatedItemVal, //updating total_item in initial state of cart
    }
  }

  //total price
  if(action.type === "CART_TOTAL_PRICE"){

    //loop to find total price
    let total_price = state.cart.reduce((initialVal, curElem) => {

      let {price, amount} = curElem;

      initialVal = initialVal + (price*amount);
      // 4000 + 0 =4000 inital value
      // 1000 + 4000 = 5k ->> initlaVal

      return initialVal; 

    }, 0) //initial value is 0 //end of loop

    //updating total price after loop
    return {
      ...state,
      // total_price: total_price,
      total_price,
    };
  }

//combining cart total price and items
 if(action.type === "CART_TOTAL_PRICE_ITEM"){

// using staate variable name
    let {total_item, total_price} = state.cart.reduce(
      (accum, curElem) => {
        let {price, amount} = curElem;

        accum.total_item += + amount;
        accum.total_price +=  (price * amount);

        return accum;
    }, {
      total_item:0,
      total_price:0,
    }
    );

    return{
      ...state,
      total_item,
      total_price,
    }
 }

 //coupon
 if(action.type === "APPLY_COUPON" ) {
  const discountAmount = action.payload.discount_amount;
  const discountedPrice = state.total_price - discountAmount;
  return {
    ...state,
    discountAmount,
    total_price: discountedPrice,
  };
     

}
 
  //shipping
  if(action.type === "SAVE_SHIPPING_ADDRESS"){

    return{
      ...state,
      shipping_address:action.payload //form data that we are sending
    }
  }

  return state;


};



export default cartReducer;