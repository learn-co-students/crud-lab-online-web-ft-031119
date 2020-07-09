import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  render() {
  	console.log(this.props.restaurants);
  	debugger;
  	let restaurants = this.props.restaurants.map((restaurant, i) => {
  		return <Restaurant key={i} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
    	})
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;