import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home';
import Product from '../Product/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        {
          //<Home />
        }
        <Product />
        </div>

      </div>
    );
  }
}

export default App;
