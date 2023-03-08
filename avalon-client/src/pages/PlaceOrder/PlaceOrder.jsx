
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import CheckOutSteps from '../../components/CheckOutSteps/CheckOutSteps';
import { useCartContext } from '../../context/cartContext'
import './PlaceOrder.css'
import CartItem from '../../components/CartItem/CartItem';

function PlaceOrder () {

    const {total_item, cart, clearCart, shipping_fee, total_price, shipping_address, payment_method} = useCartContext();
 


    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  
      
  return (
    <div>
        <CheckOutSteps step1 step2 step3 step4 />

        {/* left side */}
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>

                        <p>
                            <strong>Shipping:</strong>
                            {shipping_address.address}, {shipping_address.city}, {shipping_address.country} Province {shipping_address.province}
                            {'   '} <br/>
                            {shipping_address.phone}
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>

                        <p>
                            <strong>Method:</strong>
                            {payment_method.paymentMethod}
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {cart.length === 0 ? <p className='error'>Cart is empty</p>
                        : (
                            <ListGroup variant='flush'>
                                {cart.map((currElem, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col>
                                            <img className='orderImage' src={currElem.image}/>
                                            </Col>

                                            <Col>
                                             <Link className='link' to={`/singleproduct/${index}`}>
                                            
                                                <p>{currElem.name}</p>
                                            </Link>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}

                                  {/* {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;// passing curElem as props
          })} */}
                            </ListGroup>
                        )}

                       
                    </ListGroup.Item>

                </ListGroup>
            </Col>

            <Col md={4}>
            </Col>
        </Row>
        
    </div>
  )
}

export default PlaceOrder