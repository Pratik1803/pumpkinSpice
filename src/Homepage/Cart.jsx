import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { usernameData, itemsInbasket } from '../LandingPage/LandingPage'
import { wishlist } from './Card';
import './Cart.css';
import { Button } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


function Cart() {
    let name = useContext(usernameData);
    let items = useContext(itemsInbasket);
    let basketItem = items.item;
    let copyOfitems = [...wishlist];

    const [data, setData] = useState(copyOfitems);
    // const [cost, setCost] = useState(0);
    let cost = 0;
    data.map(item => {
        cost += item.price;
    });

    let baseUrl = "https://source.unsplash.com/";
    return (
        <>
            <Navbar cartItems={data.length} />
            <div className="cartItems">
                <div id="info">
                    <h1>Name :  {name.name} </h1>
                    <p>Total amount : ${cost}</p>
                </div>
                {data.map((item, index) => {
                    return <div className="item">
                        <img src={baseUrl + item.src} alt="" className="cartItemImage" />
                        <h3 className="itemTitle">{item.title}</h3>
                        <div className="deleteBtn">
                            <p>${item.price}</p>
                            <Button onClick={(e) => {
                                setData((prev) => { return prev.filter((thing, i) => i !== index) });
                                wishlist.splice(index, 1);
                                items.setItems(basketItem - 1);
                            }}><DeleteOutlineIcon /></Button>
                        </div>
                    </div>
                })}
            </div>
            <div id="checkout">
                <Button>Checkout</Button>
            </div>
        </>
    )
};
export default Cart
