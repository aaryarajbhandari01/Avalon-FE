import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import { useCartContext } from '../../context/cartContext'
import './Shipping.css'

const Shipping = ({history}) => {

    const {saveShippingAddress } = useCartContext();
  const {total_item, cart, clearCart, shipping_fee, total_price, } = useCartContext();
 
const navigate = useNavigate()

    const [address, setAddress] = useState(saveShippingAddress.address)
    const [city, setCity] = useState(saveShippingAddress.city)
    const [province, setProvince] = useState(saveShippingAddress.province)
    const [phone, setPhone] = useState(saveShippingAddress.phone)

    
   const submitHandler =(e) => {
    e.preventDefault()
    console.log('submit')
    saveShippingAddress({address, city, province, phone});
    navigate('/payment');
   }

  return (
    <>
    <CheckOutSteps step1 step2 />

    <div className='shippingContainer'>
        <div className='shippingWrapper'>

        <h2>Shipping</h2>
        <form className='shipping-details-form' onSubmit={submitHandler}>

            <div className='formGroup'>
            <label>Address</label>
            <br/>
            <input 
            required
                id="address"
                type="text"
                placeholder="Enter Address" 
                value={address ? address : ""}
                onChange={(e) => setAddress(e.target.value)}
            />
            </div>

            <div className='formGroup'>
            <label>City</label>
            <br/>
            <input 
            required
                id="city"
                type="text"
                placeholder="Enter City" 
                value={city ? city : ""}
                onChange={(e) => setCity(e.target.value)}
            />
            </div>

            <div className='formGroup'>
            <label>Province</label>
            <br/>
            <input 
            required
                id="province"
                type="text"
                placeholder="Enter Province" 
                value={province ? province : ""}
                onChange={(e) => setProvince(e.target.value)}
            />
            </div>

            <div className='formGroup'>
            <label>Contact</label>
            <br/>
            <input 
            required
                id="phone"
                type="text"
                placeholder="Enter Phone Number" 
                value={phone ? phone : ""}
                onChange={(e) => setPhone(e.target.value)}
            />
            </div>

            <div className='shippingSubmitBtn'>
            <button type='submit'>Continue</button>
            </div>
        </form>

        </div>

    </div>
    </>
    
  )
}

export default Shipping

