import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css"
import axios from "axios";
import { register } from '../../actions/userAction'
import { useDispatch, useSelector } from "react-redux";

const Register = ({location, history}) => {

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch()

  const redirect = location && location.search ? location.search.split('=')[1] : '/'  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //get user state
  const userRegister = useSelector(state => state.userRegister) //userLogin inside store.js

  //destructuring userRegister
  const {error, loading, userInfo} = userRegister

  //redirecting user back on the page they were on if loged in
  useEffect(() => {
    if (history && userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Submitted')

    //checking password and confirm password
    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    } 
    else {
       //dispatching action
      dispatch(register(username, password,firstName, lastName, email))
    }

   
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="title"><h3 className="title">CREATE AN ACCOUNT</h3></div>

        {error && <p>{error}</p>}

        <form 
          className="form-group" 
          onSubmit={handleRegister}
        >
          <input 
            required
            id="username"
            type="text"
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
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
         />
         <input 
            required
            id="firstName"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
         />
         <input 
            required
            id="firstName"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
         />
         <input 
            required
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
            {message && <p className="form-error"> {message} </p>}
    
            <p className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button 
            type="submit" 
            className="register-btn">
            Register
          </button>
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}

          <p>Already have an account?</p>
          <Link 
            className ="link" 
            // to="/login"
            to={redirect ? `/login?redirect=${redirect}` : '/login' }
            >
               <p><span>Login to Avalon</span> </p>
          </Link> 
        </form>
      </div>
    </div>
    
       
          
  );
};

export default Register;