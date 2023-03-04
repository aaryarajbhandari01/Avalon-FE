import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import { useCartContext } from '../../context/cartContext'
import './Payment.css'

function Payment( {history}) {

    // const {savePaymentMethod } = useCartContext();
    const {saveShippingAddress } = useCartContext();

    const [paymentMethod, setPaymentMethod] = useState('Khalti')

const navigate = useNavigate()


    if(!saveShippingAddress.address) {
        navigate('/shipping')
    }

    const submitHandler =(e) => {
        e.preventDefault()
        console.log('submit')
        // saveShippingAddress({paymentMethod});
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
            <input 
                id="khalti"
                type="radio"
                label="Khalti"
                name="paymentMethod" 
                // value={address ? address : ""}
                onChange={(e) => setPaymentMethod(e.target.value)}
            /> 
            <label>Khalti</label>
            </div>

            <div className='inputGroup'>
            <input 
                id="cod"
                type="radio"
                label="Cash On Delivery"
                name="paymentMethod" 
                checked
                // value={address ? address : ""}
                onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label>Cash On Delivery</label>
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