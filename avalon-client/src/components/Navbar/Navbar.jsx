import React, { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useCartContext } from "../../context/cartContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../actions/userAction'
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Navbar = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //geting total item in  cart
  const {total_item} = useCartContext();
  
  const handleSearchClick = () => {
    // Scroll to the search bar
    const searchBar = document.getElementById('searchBar');
    searchBar.scrollIntoView({ behavior: 'smooth' });

    // Highlight the search bar
    searchBar.style.backgroundColor = '#c6e8df';
    setTimeout(() => {
      searchBar.style.backgroundColor = '';
    }, 2000); // remove highlight after 2 seconds
  };

  const logoutHandler = () =>{
    dispatch(logout())
    console.log('logout')
        navigate('/login');
  }

  return (
    <div className = 'navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="logoitem">
          <Link className ="link" to="/">
            <img src="/images/dark.png" alt="logo" className="logo"/>
         </Link>
          </div>
            <div className="item">
              <Link className ="link" to="/">Home</Link>
            </div>
            <div className="item">
              <Link className ="link" to="/about">About</Link>
            </div>
            {/* <div className="item">
              <Link className ="link" to="/login">Login</Link>
            </div> */}
            <div className="item">
              <Link className ="link" to="/products">Products</Link>
            </div>
        </div>

        <div className="center">
          <Link className ="link" to="/">AVALON APPARELS</Link>
        </div>

        <div className="right">
          {/* <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div> */}
           

            <div className="icons">
              {/* <div className="search"> */}
                {/* <input type="text" placeholder="Seach Items"/> */}
                <div className="item">
                 <Link className ="link" to="/products" onClick={handleSearchClick}>
                    <SearchIcon/>
                  </Link>
                  </div>
               {/* </div> */}

            {/* <PersonOutlineIcon/> */}
            
            <div className="item">
            <Link className ="link" to="/myCart">
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>{total_item}</span>
            </div>
            </Link>
</div>

            {userInfo ? (
              <>
              {/* <div title={userInfo.first_name} id='username' > */}
              
              <div className="item">
              <Link className ="link" to="/wishlist">
            <div className="cartIcon">
              <FavoriteBorderIcon/>
            </div>
            </Link>
                </div>


              <div title="Profile" id='username' >
                <div className="item">
                <Link to='/profile' className="icons">
                <PersonOutlineIcon/> 
                {/* <span title={userInfo.first_name} className="username">Hi! {userInfo.first_name} </span> */}
                </Link>
                
                <Link to='/profile' className="icons">
                {/* <PersonOutlineIcon/> */}
                <span title={userInfo.first_name} className="username">Hi! {userInfo.first_name} </span>
                </Link>

                </div>
                
               

              </div>

              <div className="item">
                <div  title="Logout" onClick={logoutHandler}><LogoutIcon/></div>
              </div>
                </>

            ) : (
             

             <div className="item">
              <Link className ="link login" to="/login" >Login</Link>
              {/* <LoginIcon/> */}

            </div>
            )}


            <div></div>
             {/* <div className="item">
              <Link className ="link" to="/login">Login</Link>
            </div> */}
            </div>
        </div>
        </div>
      </div>
  )
}

export default Navbar