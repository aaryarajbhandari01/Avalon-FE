import React from 'react'

const Review = ({reviews}) => {
    console.log(reviews);
    
  return (
    <div>
        {reviews ? (
        reviews.map((review, index) => (
          <div key={index}>
            <p>Review by {review.user.first_name} {review.user.last_name}</p>
            <p>{review.review}</p>
          </div>
        ))
      ) : (
        <p>No reviews found</p>
      )}

    </div>
  )
}

export default Review