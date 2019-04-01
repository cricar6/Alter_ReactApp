import React, { Component } from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Products from '../Products/Products';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Slider />
        <Products />
      </div>
    );
  }
}

export default Home;
