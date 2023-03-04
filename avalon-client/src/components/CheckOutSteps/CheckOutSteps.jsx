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
                 <LinkContainer to="/myCart" className='link active-category'>
                 <Nav.Link >
                 <ShoppingCartIcon/>
                    {/* Login */}
                    </Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <ShoppingCartIcon/> </Nav.Link>
            )}
        </Nav.Item>

        <div class="connect"></div>

        <Nav.Item className='steps'>
            {step2 ? (
                 <LinkContainer to="/shipping" className='link active-category'>
                 <Nav.Link>
                    {/* Shipping */}
                    <AddLocationAltIcon/>
                    </Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <AddLocationAltIcon/></Nav.Link>
            )}
        </Nav.Item>

        <div class="connect"></div>


        <Nav.Item className='steps'>
            {step3 ? (
                 <LinkContainer to="/payment" className='link active-category'>
                 <Nav.Link><PaymentIcon/></Nav.Link>
             </LinkContainer>
            ):(
                <Nav.Link disabled> <PaymentIcon/></Nav.Link>
            )}
        </Nav.Item>

        <div className="connect "></div>


        <Nav.Item className='steps'>
            {step4 ? (
                 <LinkContainer to="/placeorder" className='link active-category'>
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