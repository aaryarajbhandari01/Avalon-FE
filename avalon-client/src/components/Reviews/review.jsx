import React from 'react'
import "./review.css"

const Review = ({reviews}) => {
    

  console.log('------------review',reviews);

    
  return (
    <div>
        {reviews ? (
        reviews.map((review, index) => (
          <div class="comment-box" key={index}>
            {/* <p class="comment-header"> <span> {review.user.first_name} {review.user.last_name}  </span></p> */}
            <p class="comment-header"> <span>Review by : </span> {review.user.first_name} {review.user.last_name}</p>
            <div class="comment-box-inner">
            <p>" {review.review} "</p>
            </div>
            <div class="triangle-comment"></div>
          </div>
        ))
      ) : (
        <p>No reviews found</p>
      )}

    </div>
  )
}

export default Review