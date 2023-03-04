import { Link } from "react-router-dom";
import "./Login.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { login } from '../../actions/userAction'
import { useDispatch, useSelector } from "react-redux";


const Login = ({location, history}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const redirect = location && location.search ? location.search.split('=')[1] : '/'  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //get user state
  const userLogin = useSelector(state => state.userLogin) //userLogin inside store.js

  //destructuring userLogin
  const {error, loading, userInfo} = userLogin

  //redirecting user back on the page they were on if loged in
  useEffect(() => {
    if (history && userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Submitted')

    //dispatching action
    dispatch(login(username, password))

    
  }
  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://127.0.0.1:8000/api/account/login/", { username, password });
  //     localStorage.setItem("access_token", response.data.access);
  //     localStorage.setItem("refresh_token", response.data.refresh);
  //     localStorage.setItem("username", response.data.username);
  //     setIsLoggedIn(true); // Update state to reflect that the user is logged in


  //     // update state to reflect that the user is logged in
  //   } catch (error) {
  //     console.log(error);
  //   }
    
    

  // };

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);
  
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="title"><h3 className="title">SIGN IN</h3></div>
        <form className="form-group" onSubmit={handleLogin}>
          <input 
            id="username"
            type="username"
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
          <button type="submit" className="login-btn">LOGIN</button>
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}

          <p>Dont have an account yet?</p>

          <Link 
              className ="link" 
              // to="/register"
              to={redirect ? `/register?redirect=${redirect}` : '/home' }
              >
               <p> <span>Create a new account</span> </p>
          </Link> 
        </form>
      </div>
    </div>
  );
};

export default Login;