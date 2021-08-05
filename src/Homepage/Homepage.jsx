import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Popups from './Popups';
import Products from './Products';
import Footer from './Footer';


function Homepage() {
    return <>
        <Slider />
        <Popups />
        <Products />
        <Footer />
    </>
}

export default Homepage
