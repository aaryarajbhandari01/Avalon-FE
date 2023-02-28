import { Link } from "react-router-dom";
import "./Login.css"
import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/account/login/", { username, password });
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      localStorage.setItem("username", response.data.username);


      // update state to reflect that the user is logged in
    } catch (error) {
      console.log(error);
    }
    
    

  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="title"><h3 className="title">SIGN IN</h3></div>
        <form className="form-group" onSubmit={handleLogin}>
          <input 
            type="username"
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
          <button type="submit" className="login-btn">LOGIN</button>
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}

          <p>Dont have an account yet?</p>
          <Link className ="link" to="/register">
               <p> <span>Create a new account</span> </p>
          </Link> 
        </form>
      </div>
    </div>
  );
};

export default Login;