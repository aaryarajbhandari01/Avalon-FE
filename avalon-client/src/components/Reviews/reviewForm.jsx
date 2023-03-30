import React, { useState } from 'react'
import "./reviewForm.css"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ReviewForm = ({ productId, onSubmit }) => {
  
  const [review, setReview] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const username = localStorage.getItem('username');

  const handleSubmit = async (event) => {
      event.preventDefault();

      
      if (!userInfo) {
        // setCouponError('Please log in to apply coupon');
  navigate('/login?redirect=wishlist');

        return;
      }


      try {
          const response = await axios.post('http://127.0.0.1:8000/api/product/review/create/',
          {
              user: username,
              product: productId,
              review,
          },
          {
              headers: {
                  Authorization: `Bearer ${userInfo.token}`,
              },
          }
          );

          onSubmit(response.data, username);
      } catch (error) {
        setError("Please login");

       
      }

  };

  return (
    <section className="reviewform-container">
    <div className="reviewform-wrapper">
        <div className="reviewform">
            <div className="reviewform-top">
                <h2 className="title"> Add Your Review </h2>

                {/* {error && <div className="alert alert-danger">{error.message}</div>} */}
                {error && (
  <div className="error-message">{error}</div>
)}
                <form onSubmit={handleSubmit}>
                <div className="reviewform-input">

                    <div className="userinput">
                        <label>Username</label><br/>
                        {userInfo && userInfo.first_name ? 
                        <input 
                        type="text" 
                        name="listing_faq-question" 
                        disabled
                        id="review-username" 
                        placeholder={userInfo.username} 
                        // placeholder={userInfo.first_name} 
                        // required
                        />
                        :
                        <input 
                        type="text" 
                        name="listing_faq-question" 
                        disabled
                        
                        id="review-username" 
                        placeholder="First Name"
                        // required
                        />
                        }

                        <br/>
                        <label>Full Name</label><br/>
                        {userInfo && userInfo.first_name ? 
                        <input 
                        type="text" 
                        name="listing_faq-question" 
                        disabled
                        
                        id="review-username" 
                        placeholder={userInfo.first_name  + " " + userInfo.last_name} 
                       

                        // required
                        />
                        :
                        <input 
                        type="text" 
                        name="listing_faq-question" 
                        disabled
                        
                        id="review-username" 
                        placeholder="Last Name"
                        // required
                        />
                        }

                        <div className="input-group">
                            <label htmlFor="review">Your Review</label><br/>
                            <textarea 
                            aria-label="With textarea" 
                            rows="4" 
                            cols="50" 

                            id="review"
                            value={review}
                            onChange={(event) => setReview(event.target.value)}

                            placeholder="Message" 
                            className="form-control mt-3 w-100 rounded-0" 
                            required/>
                        </div>
                        <button type="submit" className='add-btn'>Submit</button>
                    </div>
                </div>
                </form>

             </div>
        </div>
    </div>  
    </section>
  )
}

export default ReviewForm