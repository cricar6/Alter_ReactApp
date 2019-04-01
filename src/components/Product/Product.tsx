import React, { Component } from 'react';
import './Product.scss';
class Product extends Component {
    render() {
        return (
            <div className="one_product">
                <div className="details">
                    <div className="top">
                        <div className="logo">
                        </div>
                    </div>
                    <div className="mid">
                        <p className="name">Name</p>
                        <p className="id">#000</p>

                        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing eli. Tempora facilis quasi ratione delectus repellat eaque modi accusantium, </p>
                        <p className="productLine">Product Line</p>

                        <div className="specificContainer">
                            <div className="specific">
                                <p className="titleSpe">
                                    Color
                                </p>
                                <p className="color descSpe">
                                    Color
                                </p>
                            </div>
                            <div className="specific">
                                <p className="titleSpe">
                                    Tamaño
                                </p>
                                <p className="size descSpe">
                                    Size
                                </p>
                            </div>
                            <div className="specific">
                                <p className="titleSpe">
                                    Material
                                </p>
                                <p className="material descSpe">
                                    Material
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="bot">
                        <p className="price">
                            0
                    </p>

                    </div>
                </div>
                <div className="productContainer">

                </div>
            </div>
        );
    }
}

export default Product;
