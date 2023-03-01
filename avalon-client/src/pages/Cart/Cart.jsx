import React from 'react'
import { Link } from 'react-router-dom'
import "./Cart.css"
import CartItem from '../../components/CartItem/CartItem'
import { useCartContext } from '../../context/cartContext'

// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Cart = () => {

  const {total_item, cart, clearCart, shipping_fee, total_price} = useCartContext();
  console.log("file: Cart.js ~ cart", cart);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate('/login?redirect=home');
  }
 
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
          <button>Apply Promo</button>
          <button 
            className="btn btn-clear" 
            onClick={clearCart}
            >
            Clear Cart
          </button>
        </div>
     
           {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
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
             - NRs.{shipping_fee}
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
              NRs{shipping_fee + total_price}
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