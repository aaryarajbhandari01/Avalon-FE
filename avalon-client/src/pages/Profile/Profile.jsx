import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css"
import axios from "axios";
import { getUserDetails } from '../../actions/userAction'
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Profile = ({history}) => {

const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //get user state
  const userDetails = useSelector(state => state.userDetails) //userLogin inside store.js

  //destructuring userRegister
  const {error, loading, user} = userDetails


  const userLogin = useSelector(state => state.userLogin) //userLogin inside store.js

  //destructuring userRegister
  const {userInfo} = userLogin


  //redirecting user back on the page they were on if loged in
  useEffect(() => {
    if (history && userInfo) {
        history.push('/login');
      
    } else {
        if(!user || !user.username){
            dispatch(getUserDetails('profile')) //getting data 
        }else{
            setUsername(user.username) //setting profile details with api details
            setEmail(user.email)
            setFirstName(user.first_name)
            setLastName(user.last_name)

            const config = {
              headers: {
                Authorization: `Bearer ${userInfo.token}`
              },
            };
              // retrieve orders data
              axios.get('http://127.0.0.1:8000/api/order/orders/', config)
              .then(res => {
                setOrders(res.data)
              })
              .catch(err => console.log(err))
        }
    }
  }, [dispatch, history, userInfo, user]);

  const handleRegister= (e) => {
    e.preventDefault();
    console.log('Submitted')

    //checking password and confirm password
    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    } 
    else {
       //dispatching action
console.log('profile updating')    }

   
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <div className="profile-title">
      <h2> My Profile</h2>
      <h2>My Orders</h2>

    </div>
    <div className="profilecontainer">
      
    <div className="grid grid-filter-column">

        <div className="left">
        <h3> <span> <AccountCircleIcon className="icon"/> </span> </h3>
        {/* <p>test user</p> */}
        {error && <p>{error}</p>}

        <form 
        className="form-group" 
        onSubmit={handleRegister}
        >
          <div className="form-input">
          <label>Username</label>
        <input 
        disabled
            required
            id="username"
            type="text"
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        
        {/* <input 
            required
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <input 
            required
            id="passwordConfirm"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}

          <div  className="form-input">

          <label>First Name</label>

          <input 
          disabled

              required
              id="firstName"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <label>Last Name</label>
        <input 
        disabled

            required
            id="lastName"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
          <label>Email</label>

        <input 
        disabled

            required
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
            {message && <p className="form-error"> {message} </p>}

        {/* <button 
            type="submit" 
            className="register-btn">
            Register
        </button> */}
        </form>
        </div>

        <div className="right">
          {/* <h3>My Orders</h3>
          <p>Some text..</p>
            {orders.map(order => (
              <div key={order.id}>
                
                <h2>Order #{order.id}</h2>
                <p>Shipping Address: 
                  {order.shipping_details.address},
                  {order.shipping_details.city}, 
                  {order.shipping_details.province}
                </p>
                <ul>
                  {order.order_items.map(item => (
                    <li key={item.id}>
                      <h3>{item.product.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: {item.product.price}</p>
                    </li>
                  ))}
                </ul>
                <p>Total Amount: {order.total_amount}</p>
                <p>Discount Amount: {order.discount_amount}</p>
                <p>Final Amount: {order.final_amount}</p>
                <p>Order Status: {order.order_status}</p>
                <p>Delivery Status: {order.delivery_status}</p>
            </div>
          ))} */}

                <div className="eg">
                  <h3> <span> <InventoryIcon className="icon"/> </span> </h3>
                  
                  {orders.map(order => (
                  <details key={order.id}>
                  
                      {/* <div > */}
                        <summary>
                          <div>
                            <span><LocalMallIcon/></span>
                           
                            <h3>
                              <strong>Order #{order.id}</strong>
                              {/* <small>
                                <ul>
                                  {order.order_items.map(item => (
                                    <li key={item.id}>
                                      <h3>{item.product.name}</h3>
                                      <p>Quantity: {item.quantity}</p>
                                      <p>Price: {item.product.price}</p>
                                    </li>
                                  ))}
                                </ul>
                              </small> */}
                            </h3>
                            <span>Delivery Status:{order.delivery_status} </span> 
                          </div>
                        </summary>
                        <div>
                              <small className="sumDetails">
                                <ul>
                                  {order.order_items.map(item => (
                                    <li key={item.id}>
                                      <h3>{item.product.name}</h3>
                                      <p>Quantity: {item.quantity}</p>
                                      <p>Price: {item.product.price}</p>
                                    </li>
                                  ))}
                                </ul>
                              </small>
                          <dl>
                            <div>
                              <dt>Total Amount</dt>
                              <dd>{order.total_amount}</dd>
                            </div>
                            <div>
                              <dt>Order Status</dt>
                              <dd>{order.order_status}</dd>
                            </div>
                            <div>
                              <dt>Shipping Address: </dt>
                              <dd>
                                {order.shipping_details.address},
                                {order.shipping_details.city}, 
                                {order.shipping_details.province}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      {/* </div>  */}
                  
                  </details>
                    ))}
                </div>


        </div>

    </div>
    </div>
    </>

  )
}

export default Profile