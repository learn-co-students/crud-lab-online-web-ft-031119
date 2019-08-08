import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {reviews, deleteReview , restaurantId} = this.props

    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const reviewList = associatedReviews.map(review => {
      return (
        <Review key={review.id}
        review={review}
        deleteReview={deleteReview} />
      )
    })
    return (
      <ul>
        Reviews
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;