import React, { useState } from 'react'
import "./AddToCart.css"
import { AddShoppingCartOutlined, Check } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const AddToWishlist = ({ productId }) => { //geting passed product from singleProduct.jsx as prop

    const [wishlistStatus, setWishlistStatus] = useState(null);
    const [error, setError] = useState(null);

  const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

console.log('selected id',productId)
    
    const addToWishlist = async (productId) => {
   
        if (!userInfo) {
            // setCouponError('Please log in to apply coupon');
      navigate('/login?redirect=wishlist');

            return;
          }

        try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/product/wishlist/create/",
        { product_id: productId },
        // { product_id: [productId.toString()] },
        
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
          
        }
      );
      setWishlistStatus(response.status);
    } catch (error) {
        setError("Please log in to add to wishlist");

    }
  };

  return (
    <section className='addToWishlist'>

        

        {/* ADD TO WISHLIST*/}
        <div className='wishlist'>
        {error && (
  <div className="error-message">{error}</div>
)}
        {/* <Link 
          className ="link" 
          to="/wishlist" 
           //calling add to card function and passing data as arguments.
          > */}
            <button 
                className="add" onClick={() => addToWishlist(productId.id)}
            >
                <FavoriteBorderIcon/> 
                <p> 
                    {wishlistStatus === 201 && (
                    <div className="wishlist-message success">
                        Product added to wishlist.
                    </div>
                    )}
                    {wishlistStatus === 400 && (
                    <div className="wishlist-message error">
                        There was an error adding the product to the wishlist.
                    </div>
                  )}
            </p>
            </button>
        {/* </Link> */}
        
        </div>

       
    </section>
  )
}

export default AddToWishlist