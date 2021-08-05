import React from 'react'
import './Popups.css'
import VerticalImg from '../images/popups/popUp-vertcal.png';
import HorizontalIng from "../images/popups/propUp-horizontal.png";
import Headphones from "../images/popups/headphones.png";
import Stationary from "../images/popups/stationary.png";

function Popups() {
    return (
        <div id="popups" >
            <h1 style={{ marginLeft: "2%" }}>Explore!</h1>
            <div id="posters">
                <div id="box-1">
                    <img id="vertical" src={VerticalImg} alt="vertical img" />
                    <div id="box-2">
                        <img src={HorizontalIng} id="horizontal" alt="" />
                        <div id="box-3">
                            <img src={Headphones} id="headphones" alt="" />
                            <img src={Stationary} id="stationary" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popups
