import React, { useState } from 'react'
import './Products.css'
import products from '../images/images';
import Card from './Card';


function Products() {


    return (
        <>
            <div id="product-section">
                <h3>Best Deals of the Day!!!</h3>
                <div id="products">
                    {products.map((product, index) => {
                        return <Card key={index} id={product.id} title={product.title} price={Number(product.price)} cardNo={index} />
                    })}
                </div>
            </div>
        </>
    )
};
export default Products
