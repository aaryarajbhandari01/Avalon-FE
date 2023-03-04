import React, { useState } from 'react'
import "./reviewForm.css"
import axios from 'axios';

const ReviewForm = ({ productId, onSubmit }) => {

    const [review, setReview] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
            const response = await axios.post('/api/product/review/create', {
              product_id: productId,
              review,
            });
      
            onSubmit(response.data);
          } catch (error) {
            setError(error.response.data);
          }

      };

  return (
    <section className="reviewform-container">
    <div className="reviewform-wrapper">
        <div className="reviewform">
            <div className="reviewform-top">
                <h2 className="title"> Add Your Review </h2>

                {error && <div className="alert alert-danger">{error.message}</div>}
                
                <form onSubmit={handleSubmit}>
                <div className="reviewform-input">

                    <div className="userinput">
                        <label>First Name</label><br/>
                        <input 
                        type="text" 
                        name="listing_faq-question" 
                        
                        id="review-username" 
                        placeholder="Name" 
                        required/>
<br/>
                        <label>Last Name</label><br/>
                        <input 
                        type="text" 
                        name="listing_faq-question" 
                        
                        id="review-username" 
                        placeholder="Name" 
                        required/>

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