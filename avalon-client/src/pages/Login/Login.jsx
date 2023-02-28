import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="title"><h3 className="title">SIGN IN</h3></div>
        <form className="form-group">
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button className="login-btn">LOGIN</button>
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