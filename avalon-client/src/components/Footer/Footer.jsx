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
          <span>Tops</span>
          <span>Bottoms</span>
          <span>Dresses</span>
          
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span><h5>Avalon Apparels	&#169; </h5></span>
          <span><p>Shopping & Retail Online clothing brand</p></span>
          <span>
          Welcome to Avalon Apparels, your go-to destination for stylish and affordable fashion. We are a leading online clothing store dedicated to providing our customers with the latest fashion trends, exceptional quality, and an unparalleled shopping experience.
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