
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import { useCartContext } from '../../context/cartContext'
import './PlaceOrder.css'
import CartItem from '../../components/CartItem/CartItem';

function PlaceOrder () {

    const {total_item, cart, clearCart, shipping_fee, total_price, shipping_address, payment_method} = useCartContext();
 
// Retrieve the discount percent value from local storage
// const storedDiscountPercent = localStorage.getItem('discountPercent');
const discountPercent = localStorage.getItem('discountPercent');


    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  
      const placeOrder = () =>{
        console.log('Place Order')
      }
      
  return (
    <div>
        <CheckOutSteps step1 step2 step3 step4 />

        {/* left side */}
        <div className='placeOrderContainer'>
        <div className='placeOrderWrapper'> 
            <div className='placeOrderCol' >
                <div className='placeOrderGroup'>
                    <div className='placeOrderItem'>
                        <h2>Shipping</h2>

                        <p>
                            <strong>Shipping:</strong>
                            {shipping_address.address}, {shipping_address.city}, {shipping_address.country} Province {shipping_address.province}
                            {'   '} <br/>
                            {shipping_address.phone}
                        </p>
                    </div>

                    <hr/>

                    <div  className='placeOrderItem'>
                        <h2>Payment Method</h2>

                        <p>
                            <strong>Method:</strong>
                            {payment_method.paymentMethod}
                        </p>
                    </div>

                    <hr/>

                    <div  className='placeOrderItem'>
                        <h2>Order Items</h2>

                        {/* condition to check if there is items in cart */}

                        {cart.length === 0 ? <p className='error'>Cart is empty</p>
                        : (
                            <div className='placeOrderGroup'>
                                {cart.map((currElem, index) => (
                                    <div key={index}>
                                        <div className='orderRow'>
                                            <div className='orderCol'>
                                            <img className='orderImage' src={currElem.image}/>
                                            </div>

                                            <div className='orderCol'>
                                             <Link className='link' to={`/singleproduct/${index}`}>
                                                <p>{currElem.name}</p>
                                            </Link>
                                            </div>

                                            <div className='orderCol'>
                                                <p className='placeOrderCartItem'>
                                                {currElem.amount} x Nrs. {currElem.price}
                                                </p>
                                            </div>

                                            <div className='orderCol'>
                                                <p className='placeOrderCartItem'>
                                                    = Nrs {(currElem.amount * currElem.price).toFixed(2)}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                                  {/* {cart.map((curElem) => {
                                    return <CartItem key={curElem.id} {...curElem} />;// passing curElem as props
                                      })} */}
                            </div>
                                )}

                       
                    </div>
                    <hr/>

                </div>
            </div>

            <div className='placeOrderCol' >
                <div className='placeOrderSummary'>
                    <div className='placeOrderGroup'>
                 
                        <div className='placeOrderItem'>
                            <h3>Order Summary</h3>
                        </div>
                    <div className='summaryGrp'>
                        <div className='placeOrderItem'>
                            <div className='orderRow'>
                                <div className='orderColTitle'>Item</div>
                                <div className='orderCol'>NRs.{total_price}</div>
                            </div>
                        </div>

                        <div className='placeOrderItem'>
                            <div className='orderRow'>
                                <div className='orderColTitle'>Shipping Price</div>
                                <div className='orderCol'>NRs.{shipping_fee}</div>
                            </div>
                        </div>

                        <div className='placeOrderItem'>
                            <div className='orderRow'>
                                <div className='orderColTitle'>Discount</div>
                                <div className='orderCol'>- NRs. {discountPercent*total_price/100}</div>
                            </div>
                        </div>

                        <div className='placeOrderItem'>
                            <div className='orderRow'>
                                <div className='orderColTitle'>Total</div>
                                <div className='orderCol'> NRs. {shipping_fee + total_price - ((discountPercent * total_price/100))}</div>
                            </div>
                        </div>

                    </div>
                        <div className='placeOrderItem'>
                            <div className='orderRow'>
                            <button type='button'
                            className='btn-placeOrder'
                            disabled={cart.length === 0}
                            onClick={placeOrder}>Place Order</button>
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

export default PlaceOrder