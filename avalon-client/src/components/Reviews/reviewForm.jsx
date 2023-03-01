import React from 'react'
import "./reviewForm.css"

const ReviewForm = () => {
  return (
    <section className="reviewform-container">
    <div className="reviewform-wrapper">
        <div className="reviewform">
            <div className="reviewform-top">
                <h2 className="title"> Add Your Review </h2>
                <div className="reviewform-input">
                    <div className="userinput">
                        <label>Your Name</label><br/>
                        <input type="text" name="listing_faq-question" id="review-username" placeholder="Name" required/>
                        <div className="input-group">
                            <label>Your Review</label><br/>
                            <textarea aria-label="With textarea" rows="4" cols="50" id="rewiew_message" placeholder="Message" className="form-control mt-3 w-100 rounded-0" required/>
                        </div>
                        <button className='add-btn'>Submit</button>
                     </div>
                 </div>
             </div>
        </div>
    </div>  
    </section>
  )
}

export default ReviewForm