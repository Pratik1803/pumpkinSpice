import React, { useState, useContext } from 'react'
import './Card.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
import { itemsInbasket } from '../LandingPage/LandingPage';

let wishlist = [];

function Card(props) {

    let baseUrl = "https://source.unsplash.com/";
    function wishlisted() {
        wishlist.push({
            src: props.id,
            title: props.title,
            price: props.price,
        });
    };

    const items = useContext(itemsInbasket);


    return (
        <>
            <div className="card">
                <img className="card-img" src={baseUrl + props.id} alt="" />
                <div className="card-info">
                    <div className="card-desc">
                        <h3>{props.title}</h3>
                        <p>$ {props.price}</p>
                    </div>
                    <Button onClick={() => {
                        wishlisted();
                        let item = items.item;
                        items.setItems(item + 1);
                        let nodeList = document.querySelectorAll(".favorite-icon");
                        for (let i = 0; i < nodeList.length; i++) {
                            if (i === props.cardNo) {
                                if (nodeList[i].style.fill = "grey") {
                                    nodeList[i].style.fill = "orange";
                                }
                            }
                        }
                    }} ><FavoriteIcon className="favorite-icon" /></Button>
                </div>
            </div>
        </>
    )
};


export { wishlist };
export default Card;
