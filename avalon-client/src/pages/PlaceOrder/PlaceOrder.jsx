
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import { useCartContext } from '../../context/cartContext'
import './PlaceOrder.css'
import CartItem from '../../components/CartItem/CartItem';
import axios from 'axios'

function PlaceOrder () {

    const {total_item, cart, clearCart, shipping_fee, total_price, shipping_address, payment_method} = useCartContext();
 
// Retrieve the discount percent value from local storage
// const storedDiscountPercent = localStorage.getItem('discountPercent');
const discountPercent = localStorage.getItem('discountPercent');
const couponCode =localStorage.getItem('couponCode');

const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
console.log('token is', userInfo.token)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  
    // const placeOrder = () =>{
    //     console.log('Place Order')
    //   }

    // const placeOrder = async () => {
    //     // Retrieve the order data from the state and create a request body
    //     const orderData = {
    //       orderItems: cart,
    //       shippingAddress: shipping_address,
    //       paymentMethod: payment_method.paymentMethod,
    //       totalPrice: total_price,
    //       shippingFee: shipping_fee
    //     };
      
    //     try {
    //       // Make a POST request to the backend endpoint
    //       const response = await axios.post('http://127.0.0.1:8000/api/order/checkout/', JSON.stringify(orderData),{
    //         // method: 'POST',
    //         headers: { 
    //             'Authorization': `Bearer ${userInfo.token}`,
    //     'Content-Type': 'application/json'}
    //         // body: JSON.stringify(orderData)
    //       });
          
    //       if (response.ok) {
    //         // If the request is successful, clear the cart and navigate to the order confirmation page
    //         clearCart();
    //         // navigate('/order-confirmation');
    //         console.log('order-confirmed')
    //       } else {
    //         // If the request fails, log the error message
    //         console.error('Failed to place order:', response.statusText);
    //       }
    //     } catch (error) {
    //       // If an error occurs, log the error message
    //       console.error('An error occurred while placing the order:', error);
    //     }
    //   };
    const placeOrder = async () => {
        // Create the order object
        const orderData = {

            // shipping_id: shipping_address.phone,
            // shipping_id: shipping_id,
          shipping_address: {
            shipping_id: shipping_address.phone,
            address: shipping_address.address,
            city: shipping_address.city,
            province: shipping_address.province,
            country: shipping_address.country,
            phone: shipping_address.phone,
          },
          cart_items: cart.map((item) => ({
            product: item.id,
            quantity: item.amount,
            price: item.price,
          })),
          payment_method: payment_method.paymentMethod,
          shipping_price: shipping_fee,
          total_amount: shipping_fee + total_price - ((discountPercent * total_price/100)),
          discount_amount: discountPercent * total_price/100 ,//discountPercent,
          coupon_code: couponCode,
        };
        // const orderData = {
        //     shipping_id: shipping_address.phone+shipping_address.address,
        //     coupon_code: couponCode,
        //     cart_items: cart.map((item) => item.id),
        //   };
      
        console.log(orderData);

        try {
          // Send the order to the endpoint
          const response = await axios.post('http://127.0.0.1:8000/api/order/checkout/', orderData, {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
              'Content-Type': 'application/json',
            },
          });
          
          // Clear the cart and navigate to the order details page
          clearCart();
          navigate('/orderConfirmed');

        console.log(response);
        } catch (error) {
          console.error(error);
        }
      };

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