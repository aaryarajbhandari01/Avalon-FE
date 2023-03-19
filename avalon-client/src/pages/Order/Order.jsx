
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext'
import './Order.css'
import CartItem from '../../components/CartItem/CartItem';
import axios from 'axios'

function Order () {

    const {total_item, cart, clearCart, shipping_fee, total_price, shipping_address, payment_method} = useCartContext();
    const navigate = useNavigate();
 
const discountPercent = localStorage.getItem('discountPercent');
const couponCode =localStorage.getItem('couponCode');


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
console.log('token is', userInfo.token)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  

      const handleNavigation = () => {
        navigate('/');
      };

   
        

  return (
    <div>
        {/* <CheckOutSteps step1 step2 step3 step4 /> */}

        {/* left side */}
        <div className='placeOrderContainer'>
        <div className='placeOrderWrapper'> 
            <div className='placeOrderCol' >
                <div className='placeOrderGroup'>
                    <div className='placeOrderItem'>
                        <h2>Order Comfirmed!</h2>
<br/>
                        {/* <p>
                            <strong>Shipping:</strong>
                            {shipping_address.address}, {shipping_address.city}, {shipping_address.country} Province {shipping_address.province}
                            {'   '} <br/>
                            {shipping_address.phone}
                        </p> */}
                        <p>Thankyou for shopping at Avalon Apparels.</p>
                    </div>


                  



                </div>
            </div>

            <div className='placeOrderCol' >
                <div className='placeOrderSummary'>
                    <div className='placeOrderGroup'>
                 
                      
                        <div className='placeOrderItem'>
                            <div className='orderRow'>

                            

                            <button type='button'
                            className='btn-placeOrderConfirm'
                            // disabled={cart.length === 0}
                            onClick={handleNavigation}
                            >
                                Go back to Home</button>

                            </div>
                           
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Order