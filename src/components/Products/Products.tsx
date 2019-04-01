import React, { Component } from 'react';
import Product from '../Product/Product';
import './Products.scss';

class Products extends Component {

    constructor (props : any) {
        super (props)
    }

    render() {
        return (
            <div className="productContainer">
                <h1>Products</h1>

                <div className="products">

                    <Product />

                </div>
            </div>

        );
    }
}

export default Products;
