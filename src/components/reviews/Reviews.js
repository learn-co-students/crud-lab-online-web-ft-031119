import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const restaurantReviews = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurantId)
    const reviewList = restaurantReviews.map(rev => <Review
      key={rev.id}
      review={rev}
      restaurantId={this.props.restaurantId}
      deleteReview={this.props.deleteReview}/>
    )
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;
