import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Register.css"
import axios from "axios";


const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/account/user/register/", {
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      });
      console.log(response.data); // or redirect to another page
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data); // display error message
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="title"><h3 className="title">CREATE AN ACCOUNT</h3></div>
        <form 
          className="form-group" 
          onSubmit={handleRegister}
        >
          <input 
             type="text"
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
         <input 
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
         />
         <input 
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
         />
         <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
            {error && <p>{error}</p>}

            <p className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button type="submit" className="register-btn">Register</button>
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}

          <p>Already have an account?</p>
          <Link className ="link" to="/login">
               <p> <span>Login to Avalon</span> </p>
          </Link> 
        </form>
      </div>
    </div>
    
       
          
  );
};

export default Register;