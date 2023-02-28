import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Register.css"

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="title"><h3 className="title">CREATE AN ACCOUNT</h3></div>
        <form className="form-group" 
        // onSubmit={handleregister}
        >
          <input 
            // type="username"
            placeholder="Username" 
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
         />
         <input 
         className="name"
            placeholder="first name"
         />
         <input 
         className="name"

            placeholder="last name"
         />
         <input 
            placeholder="email"
         />
         <input 
            placeholder="confirm password"
         />
            <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
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