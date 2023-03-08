import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import { useCartContext } from '../../context/cartContext'
import './Payment.css'

function Payment( {history}) {

    const {savePaymentMethod } = useCartContext();
    const {saveShippingAddress } = useCartContext();

    const [paymentMethod, setPaymentMethod] = useState(null);

const navigate = useNavigate()


    // if(!saveShippingAddress.address) {
    //     navigate('/shipping')
    // }

    const submitHandler =(e) => {
        e.preventDefault()
        console.log('submit payment')
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
            <input 
                id="khalti"
                type="radio"
                label="Khalti"
                // name="paymentMethod" 
                name="paymentMethodKhalti" 

                checked={paymentMethod === 'Khalti'}
                // value={address ? address : ""}
                value="Khalti"
                onChange={(e) => setPaymentMethod(e.target.value)}
            /> 
            <label  htmlFor="khalti" >Khalti</label>
            </div>

            <div className='inputGroup'>
            <input 
                id="cod"
                type="radio"
                label="Cash On Delivery"
                name="paymentMethodCOD" 
                // value={address ? address : ""}
                value="CashOnDelivery"
                checked={paymentMethod === 'CashOnDelivery'}
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