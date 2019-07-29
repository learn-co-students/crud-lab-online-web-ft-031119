import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    const restaurantList = this.props.restaurants.map(rest => <Restaurant
      key={rest.id}
      restaurant={rest}
      deleteRestaurant={this.props.deleteRestaurant}/>
    )
    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;
