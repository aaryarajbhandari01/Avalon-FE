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
    navigate('/login?redirect=shipping');
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


// const Wrapper = styled.section`
//   padding: 9rem 0;
//   .grid-four-column {
//     grid-template-columns: repeat(4, 1fr);
//   }
//   .grid-five-column {
//     grid-template-columns: repeat(4, 1fr) 0.3fr;
//     text-align: center;
//     align-items: center;
//   }
//   .cart-heading {
//     text-align: center;
//     text-transform: uppercase;
//   }
//   hr {
//     margin-top: 1rem;
//   }
//   .cart-item {
//     padding: 3.2rem 0;
//     display: flex;
//     flex-direction: column;
//     gap: 3.2rem;
//   }
//   .cart-user--profile {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     gap: 1.2rem;
//     margin-bottom: 5.4rem;
//     img {
//       width: 8rem;
//       height: 8rem;
//       border-radius: 50%;
//     }
//     h2 {
//       font-size: 2.4rem;
//     }
//   }
//   .cart-user--name {
//     text-transform: capitalize;
//   }
//   .cart-image--name {
//     /* background-color: red; */
//     align-items: center;
//     display: grid;
//     gap: 1rem;
//     grid-template-columns: 0.4fr 1fr;
//     text-transform: capitalize;
//     text-align: left;
//     img {
//       max-width: 5rem;
//       height: 5rem;
//       object-fit: contain;
//       color: transparent;
//     }
//     .color-div {
//       display: flex;
//       align-items: center;
//       justify-content: flex-start;
//       gap: 1rem;
//       .color-style {
//         width: 1.4rem;
//         height: 1.4rem;
//         border-radius: 50%;
//       }
//     }
//   }
//   .cart-two-button {
//     margin-top: 2rem;
//     display: flex;
//     justify-content: space-between;
//     .btn-clear {
//       background-color: #e74c3c;
//     }
//   }
//   .amount-toggle {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 2.4rem;
//     font-size: 1.4rem;
//     button {
//       border: none;
//       background-color: #fff;
//       cursor: pointer;
//     }
//     .amount-style {
//       font-size: 2.4rem;
//       color: ${({ theme }) => theme.colors.btn};
//     }
//   }
//   .remove_icon {
//     font-size: 1.6rem;
//     color: #e74c3c;
//     cursor: pointer;
//   }
//   .order-total--amount {
//     width: 100%;
//     margin: 4.8rem 0;
//     text-transform: capitalize;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     align-items: flex-end;
//     .order-total--subdata {
//       border: 0.1rem solid #f0f0f0;
//       display: flex;
//       flex-direction: column;
//       gap: 1.8rem;
//       padding: 3.2rem;
//     }
//     div {
//       display: flex;
//       gap: 3.2rem;
//       justify-content: space-between;
//     }
//     div:last-child {
//       background-color: #fafafa;
//     }
//     div p:last-child {
//       font-weight: bold;
//       color: ${({ theme }) => theme.colors.heading};
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-five-column {
//       grid-template-columns: 1.5fr 1fr 0.5fr;
//     }
//     .cart-hide {
//       display: none;
//     }
//     .cart-two-button {
//       margin-top: 2rem;
//       display: flex;
//       justify-content: space-between;
//       gap: 2.2rem;
//     }
//     .order-total--amount {
//       width: 100%;
//       text-transform: capitalize;
//       justify-content: flex-start;
//       align-items: flex-start;
//       .order-total--subdata {
//         width: 100%;
//         border: 0.1rem solid #f0f0f0;
//         display: flex;
//         flex-direction: column;
//         gap: 1.8rem;
//         padding: 3.2rem;
//       }
//     }
//   }
// `;

export default Cart