import { Button } from '@material-ui/core';
import React from 'react';
import './Slider.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { sliderImgs } from '../images/images';


const baseUrl = "https://source.unsplash.com/";

function Slider() {
    return (
        <div id="slider">
            <div id="slider-img">
                {sliderImgs.map(img => {
                    return <img src={baseUrl + img} alt="" id="slider-img-current" />
                })}
            </div>
        </div>
    )
}

export default Slider
