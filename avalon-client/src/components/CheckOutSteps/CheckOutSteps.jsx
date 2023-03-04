import React from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './CheckOutSteps.css'
import LoginIcon from '@mui/icons-material/Login';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CheckOutSteps({step1, step2, step3, step4}) {
  return (
    // <div>CheckOutSteps</div>
    <Nav className='checkoutstepsContainer'>
       
        <Nav.Item className='steps'>
            {step1 ? (
                 <LinkContainer to="/login">
                 <Nav.Link>Login</Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <ShoppingCartIcon/> </Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item className='steps'>
            {step2 ? (
                 <LinkContainer to="/shipping">
                 <Nav.Link>Shipping</Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <AddLocationAltIcon/></Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item className='steps'>
            {step3 ? (
                 <LinkContainer to="/payment">
                 <Nav.Link>Payment</Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <PaymentIcon/></Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item className='steps'>
            {step4 ? (
                 <LinkContainer to="/placeorder">
                 <Nav.Link>Place Order</Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <LocalShippingIcon/></Nav.Link>
            )}
        </Nav.Item>
    </Nav>
  )
}

export default CheckOutSteps