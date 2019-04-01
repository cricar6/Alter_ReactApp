import React, { Component } from 'react';
import Product from '../Product/Product';
import './Products.scss';

class Products extends Component {
    render() {
        return (
            <div className="productContainer">
                <h1>Products</h1>

                <div className="products">

                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />


                </div>
            </div>

        );
    }
}

export default Products;
