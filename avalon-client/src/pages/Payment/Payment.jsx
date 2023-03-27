import axios from 'axios';
import KhaltiCheckout from 'khalti-checkout-web';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import Khalti from '../../components/Khalti/Khalti';
import config, { verifyPayment } from '../../components/Khalti/khaltiConfig';
import { useCartContext } from '../../context/cartContext'
import './Payment.css'

function Payment( {history}) {

    const {savePaymentMethod } = useCartContext();
    const {saveShippingAddress } = useCartContext();

    const [paymentMethod, setPaymentMethod] = useState(null);

const navigate = useNavigate()


    //integrating khalti

    let checkout = new KhaltiCheckout(config);


    

    const submitHandler =(e) => {
        e.preventDefault()
        console.log('submit payment')

        //  // Get the payment token from Khalti widget
        // checkout.on("token", async (payload) => {
        //     console.log("Payment token:", payload.token);

        //     // Call the verifyPayment function to process the payment on Django backend
        //     try {
        //     const response = await verifyPayment(payload);
        //     console.log(response);
            
        //     // Save the payment method and navigate to the next step
        //     savePaymentMethod({ paymentMethod: "Khalti" });
        //     navigate("/placeorder");
        //     } catch (error) {
        //     console.error(error);
        //     }
        // });

        // // Show the Khalti widget for payment
        // checkout.show({ amount: 1000 });


        savePaymentMethod({paymentMethod});
        navigate('/placeorder');

       }

  return (
    <>
    <CheckOutSteps step1 step2 step3/>

    <div className='paymentContainer'>
        <div className='paymentWrapper'>

        <h2>Payment</h2>
        <form className='payment-details-form' onSubmit={submitHandler}>

            <div className='formGroup'>
            <h4>Select Method</h4>
            {/* <br/> */}
            <div className='inputGroup'>

            {/* <Khalti> */}
            <input 
                id="khalti"
                type="radio"
                label="Khalti"
                // name="paymentMethod" 
                name="paymentMethodKhalti" 
                // onClick={() =>  checkout.show({amount: 1000})}
                  onClick={() => {
                    checkout.show({amount: 1000});
                    checkout.on("token", async (payload) => {
                        console.log("Payment token:", payload.token);
                        try {
                            const response = await verifyPayment(payload);
                            console.log(response);
                            savePaymentMethod({ paymentMethod: "Khalti" });
                            navigate("/placeorder");
                        } catch (error) {
                            console.error(error);
                        }
                    });
                }}
                checked={paymentMethod === 'KHALTI'}
                // value={address ? address : ""}
                value="KHALTI"
                onChange={(e) => setPaymentMethod(e.target.value)}
            /> 
            <label  htmlFor="khalti" >Pay Via Khalti</label>
            {/* </Khalti> */}

            </div>

            <div className='inputGroup'>
            <input 
                id="cod"
                type="radio"
                label="Cash On Delivery"
                name="paymentMethodCOD" 
                // value={address ? address : ""}
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label htmlFor="cod" >Cash On Delivery</label>
            </div>
            </div>


            <div className='paymentSubmitBtn'>
            <button type='submit'>Continue</button>
            </div>
        </form>

        </div>

    </div>
    </>
    
  )
}

export default Payment