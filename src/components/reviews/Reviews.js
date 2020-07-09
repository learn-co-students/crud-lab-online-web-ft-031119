import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
  	debugger;
  	let filteredReviews = this.props.reviews.filter((review) => {
  		return review.restaurantId === this.props.restaurantId;
  		});

  	let reviews = [];
  	if (filteredReviews) {
  		reviews = filteredReviews.map((review, index) => {
  			return <Review key={index} review={review} deleteReview={this.props.deleteReview}/>
  		})
  	}
    return (
      <ul>
        Reviews
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
