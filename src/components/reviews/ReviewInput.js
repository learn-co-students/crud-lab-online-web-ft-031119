import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {
  	text: '',
  	restaurantId: this.props.restaurantId
  }

  handleOnChange = e => {
  	this.setState({
  		text: e.target.value
  	})
  }

  handleOnSubmit = e => {
  	e.preventDefault();
  	this.props.addReview(this.state);
  	this.setState({
  		text: ''
  	})
  }

  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
        <label>Review:</label>
        <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
