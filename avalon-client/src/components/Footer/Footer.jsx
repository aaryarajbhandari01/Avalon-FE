import React from 'react'
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <div className="footer">
    <div className="wrapper">
      <div className="top">
        <div className='item'>
        <img src="/images/dark.png" alt="" className='logoImg'/>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span><h5>Avalon Apparels	&#169; </h5></span>
          <span><p>Shopping & Retail Online clothing brand</p></span>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            +977 1234567890
          </span>
          <span>
            avalon@gmail.com
             {/* <a href="https://www.instagram.com/avalon_apparels/">@avalon_apparels</a> */}
          </span>
          <div className="icons">
            <a><FacebookIcon /></a>
            <span>
              <a href="https://www.instagram.com/avalon_apparels/"><InstagramIcon /></a>
            </span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

 export default Footer