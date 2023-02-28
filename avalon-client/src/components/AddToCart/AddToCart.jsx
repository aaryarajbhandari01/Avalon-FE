import React, { useState } from 'react'
import "./AddToCart.css"
import { FaCheck } from "react-icons/fa";
import { AddShoppingCartOutlined, Check } from '@mui/icons-material';
import CartAmountToggle from './CartAmountToggle';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const AddToCart = ({ product }) => { //geting passed product from singleProduct.jsx as prop


  const {addToCart} = useCartContext();

    //destructuring props
    const {id, color, size, quantity} = product;

    //selected color
    const [selectedColor, setColor] = useState(color[0]);

    //selected size
    const [selectedSize, setSize] = useState(size[0]);
   console.log('selected Size',selectedSize)

    //state variable for product quantity
    const [amount, setAmount] = useState(1); //default qty value is 1

     //declaring decrease qty
    const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1); // cannot decrease qty less than 1
    };


    // //declaring increase qty
    const setIncrease = () => {
      amount < quantity ? setAmount(amount + 1) : setAmount(quantity); // checking if the added quantity is available in quantity and not allowing user to add quantity greater than the quantity qty
    };
  

  return (
    <section className='addToCart'>

        {/* DYNAMIC COLORS */}
        <div className="colors">

            <p>
                Colors :
                {/* looping colors */}
                {color?.map((curColor, index)=>{ //current color and index of the color
                       
                   return (
                   <button 
                        key={index} //unique to identify the mapped color
                        style={{backgroundColor: curColor.name , border: '1px solid black'}} //color is stored as name array object
                        className={selectedColor === curColor ? "colorBtnStyle active" : "colorBtnStyle"}
                        onClick={()=> setColor(curColor)} //setting color as selected color
                   > 
                        {selectedColor === curColor ? <Check className='checkStyle'/> : null}
                        
                    </button>
                   )
                })}
            </p>

        </div>

         {/* DYNAMIC SIZE */}
         <div className="colors">

          <p>
              Size :
              {/* looping colors */}
              {size?.map((curSize, index)=>{ //current color and index of the color
                    
                return (
                <button 
                      key={index} //unique to identify the mapped color
                      // style={{backgroundColor: curColor.name}} //color is stored as name array object
                      className={selectedSize === curSize ? "sizeBtnStyle active" : "sizeBtnStyle"}
                      onClick={()=> setSize(curSize)} //setting color as selected color
                > 
                      {selectedSize === curSize }
                      {curSize.name}
                      
                  </button>
                )
              })}
          </p>

          </div>

        {/* ADD TO CART*/}
        <div className='cart'>
        <CartAmountToggle
            //passing prop
            amount={amount} //state variable
            setDecrease={setDecrease}
            setIncrease={setIncrease}
         />
        <Link 
          className ="link" 
          to="/myCart" 
          onClick={() => addToCart(id, {color: selectedColor}, {size: selectedSize}, amount, product)} //calling add to card function and passing data as arguments.
          >
            <button 
                className="add" 
            > 
                <AddShoppingCartOutlined/> 
                Add To Cart 
            </button>
        </Link>
        </div>
    </section>
  )
}

export default AddToCart