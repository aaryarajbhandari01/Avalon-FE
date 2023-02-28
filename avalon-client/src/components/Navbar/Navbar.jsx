import React, { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useCartContext } from "../../context/cartContext";

const Navbar = () => {

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

  return (
    <div className = 'navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/dark.png" alt="logo" className="logo"/>
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
                 <Link className ="link" to="/products" onClick={handleSearchClick}>
                    <SearchIcon/>
                  </Link>
               {/* </div> */}
            <PersonOutlineIcon/>
            <Link className ="link" to="/myCart">
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>{total_item}</span>
            </div>
            </Link>
            <div></div>
             <div className="item">
              <Link className ="link" to="/login">Login</Link>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Navbar