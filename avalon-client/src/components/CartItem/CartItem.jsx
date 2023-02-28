import React from 'react'
import CartAmountToggle from "../AddToCart/CartAmountToggle"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCartContext } from '../../context/cartContext';

const CartItem = ({id, name, image, color, size, price, amount}) => { //destructuring currElem passed as a prop from Cart.jsx

  const {removeItem, setDecrease, setIncrease} = useCartContext();

  // const setDecrease = () => {
  //       // amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
  //     };
    
  // const setIncrease = () => {
  //       // amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
  //     };
    

  return (<>
    <div className='cart-heading grid grid-five-column'>

      <div className="cart-image--name">
       
        <div>
          <figure>
            <img src={image} alt={id}/>
          </figure>
        </div>

        <div className='item-div'>
            
            <p className='item-name'>{name}</p>

            <div className="size-div">
              <p>size:</p>
              <div className='size-style'>
                {size.name}
              </div>
            </div>

            <div className="color-div">
              <p>color:</p>
              <div className='color-style' style={{backgroundColor: color.name, color: color.name, border: '1px solid black'}}>
              </div>
            </div>

        </div>

      </div>

      {/* price */}
      <div className="cart-hide">
        <p className='cart-item-text'>
          NRs.{price}
        </p>
      </div>

      {/* quantity */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
        className="amt-toggle"
      />
      
      {/* Subtotal */}
    <div className="cart-hide">
      <p className='cart-item-text'>{price * amount}</p>
    </div>

    {/* Remove item */}
      <div>
        <DeleteOutlineIcon 
          className="remove-icon"  
          onClick={() => removeItem(id)} //passing id to removeItem as argument
          />
      </div>
      
    </div>

      <p className='cartItemDivider'></p>
    
    </>
  );
};

export default CartItem

// import React, { useState } from "react";
// import FormatPrice from "../Helpers/FormatPrice";
// import CartAmountToggle from "./CartAmountToggle";
// import { FaTrash } from "react-icons/fa";
// import { useCartContext } from "../context/cart_context";

// const CartItem = ({ id, name, image, color, price, amount }) => {
//   const { removeItem, setDecrease, setIncrement } = useCartContext();

//   // const setDecrease = () => {
//   //   amount > 1 ? setAmounts(amount - 1) : setAmounts(1);
//   // };

//   // const setIncrease = () => {
//   //   amount < stock ? setAmounts(amount + 1) : setAmounts(stock);
//   // };

//   return (
//     <div className="cart_heading grid grid-five-column">
//       <div className="cart-image--name">
//         <div>
//           <figure>
//             <img src={image} alt={id} />
//           </figure>
//         </div>
//         <div>
//           <p>{name}</p>
//           <div className="color-div">
//             <p>color:</p>
//             <div
//               className="color-style"
//               style={{ backgroundColor: color, color: color }}></div>
//           </div>
//         </div>
//       </div>
//       {/* price   */}
//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={price} />
//         </p>
//       </div>

//       {/* Quantity  */}
//       <CartAmountToggle
//         amount={amount}
//         setDecrease={() => setDecrease(id)}
//         setIncrease={() => setIncrement(id)}
//       />

//       {/* //Subtotal */}
//       <div className="cart-hide">
//         <p>
//           <FormatPrice price={price * amount} />
//         </p>
//       </div>

//       <div>
//         <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
//       </div>
//     </div>
//   );
// };

// export default CartItem;