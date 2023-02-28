import React from 'react'
import "./reviewForm.css"

const ReviewForm = () => {
  return (
    <section class="reviewform-container">
    <div class="reviewform-wrapper">
        <div class="reviewform">
            <div class="reviewform-top">
                <h2 class="title"> Add Your Review </h2>
                <div class="reviewform-input">
                    <div class="userinput">
                        <label>Your Name</label><br/>
                        <input type="text" name="listing_faq-question" id="review-username" placeholder="Name" required/>
                        <div class="input-group">
                            <label>Your Review</label><br/>
                            <textarea aria-label="With textarea" rows="4" cols="50" id="rewiew_message" placeholder="Message" class="form-control mt-3 w-100 rounded-0" required/>
                        </div>
                        <button className='add-btn'>Submit</button>
                     </div>
                 </div>
             </div>
        </div>
    </div>  
    </section>
    // 
  )
}

export default ReviewForm