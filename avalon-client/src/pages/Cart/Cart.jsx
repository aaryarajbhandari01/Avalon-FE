import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"
import CartItem from '../../components/CartItem/CartItem'
import { useCartContext } from '../../context/cartContext'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'


const Cart = () => {

  const {total_item, cart, clearCart, shipping_fee, total_price} = useCartContext();
  console.log("file: Cart.js ~ cart", cart);
 
   //for coupon
   const [couponCode, setCouponCode] = useState('');
   const [couponError, setCouponError] = useState('');
   const [discountPercent, setDiscountPercent] = useState(0);
 


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 

  //navigating checking is user is logged in and then navigating the user to shipping
 const checkoutHandler = () => {
    if (userInfo) {
      navigate('/shipping');
    } else {
      navigate('/login?redirect=shipping');
    }
  };

  const confirmClearCart = () => {
    const confirmed = window.confirm('Are you sure you want to clear your cart?');
    if (confirmed) {
      clearCart();
    }
  }

  const applyCoupon = async () => {

    if (couponCode.trim() === '') {
      setCouponError('Coupon code cannot be empty');
      return;
    }
  
    if (!userInfo) {
      setCouponError('Please log in to apply coupon');
      return;
    }

    
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/order/coupon-check/',

        { code: couponCode,
        discount_percent: discountPercent },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log(couponCode);
      console.log(discountPercent);

      //removing error if no error
      setCouponError(null);

      // Store the discount percent in local storage
    localStorage.setItem('discountPercent', response.data.discount_percent);

      // Assuming the API responds with the discounted total price
       // Assuming the API responds with the discounted total price and discount percentage
      //  setDiscountAmount(response.data.discount_amount);
       setDiscountPercent(response.data.discount_percent);
      // dispatch({ type: "APPLY_COUPON", payload: response.data });
    } catch (error) {
      console.log(error);
      // Display an error message to the user
      setCouponError('An error occurred while applying the coupon. Please try again later.');
    }
  };



  if (cart.length === 0){
    return  <section  className='cart'>
                <div className='title'>
                    <h3> YOUR CART </h3> 
                    <Link to="/products">
                    <button>
                        <span>Continue Shopping</span>
                    </button>
                    </Link>
                </div>
              
              <div className='cartContainer'>
                  <div className='empty'>
                    <h3>No Item in cart</h3>
                  </div>
              </div>
            </section>
  }

  // const checkoutHandler = () =>{
  //   history.push('/login?redirect=shipping')
  // }

  return (
    <section  className='cart'>
       <div className='title'>
           <h3> YOUR CART <span>Shopping Bag ({total_item})</span></h3> 
          <Link to="/products">
           <button>
                <span>Continue Shopping</span>
            </button>
            </Link>
        </div>
      <div className='cartContainer'>
       
        {/* <div className='top'>
           <span>Shopping Bag(1)</span>

            {/* <button type="filled">
                <span>CHECKOUT NOW</span>
            </button> */}
        {/* </div>  */}


        

        

           <div className="cart-heading grid grid-five-column">
              <p>Item</p>
              <p className="cart-hide">Price</p>
              <p>Quantity</p>
              <p className='cart-hide'>Subtotal</p>
              <p>Remove</p>
            </div>
            
            <hr/>

            <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;// passing curElem as props
          })}
        </div>

        {/* <hr /> */}
        
        <div className="cart-two-button">
          
          <div className='couponCode'>
             <input
              type="text"
              id='code'
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
            />
         
            <button type='submit' onClick={applyCoupon}>Apply</button>
            {couponError && (
  <div className="error-message">{couponError}</div>
)}
          </div>
          
          <button 
            className="btn btn-clear" 
            // onClick={clearCart}
            onClick={confirmClearCart}
            >
            Clear Cart
          </button>
        </div>
     
           {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <h3>Order Summary</h3>
            <div>
              <p>subtotal:</p>
              <p>
                NRs.{total_price}
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
              NRs.{shipping_fee}
              </p>
            </div>
            <div>
              <p>discount:</p>
              <p>
             - NRs. {discountPercent*total_price/100}
              
             {/* - {discountPercent} % */}
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
              NRs. {shipping_fee + total_price - ((discountPercent * total_price/100))}
              </p>
            </div>

            <button  
            className="checkout-btn" 
            type="button"
            disabled={total_item.length === 0}
            onClick={checkoutHandler}
            >
                <span>CHECKOUT NOW</span>
            </button>
          </div>
          
          </div>
        </div>
    
    </section>
  )
}


export default Cart