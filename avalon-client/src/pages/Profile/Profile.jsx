import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css"
import axios from "axios";
import { getUserDetails } from '../../actions/userAction'
import { useDispatch, useSelector } from "react-redux";

const Profile = ({history}) => {

const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

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
    <h2>My Profile</h2>
    </div>
    <div className="profilecontainer">
      
    <div className="grid grid-filter-column">

        <div className="left">
        <h3>User Profile</h3>
        {/* <p>test user</p> */}
        {error && <p>{error}</p>}

        <form 
        className="form-group" 
        onSubmit={handleRegister}
        >
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
        <h3>My Orders</h3>
        <p>Some text..</p>
        </div>
    </div>
    </div>
    </>

  )
}

export default Profile