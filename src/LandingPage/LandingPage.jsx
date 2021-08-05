import React, { createContext, useEffect, useState } from 'react';
import Homepage from '../Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Cart from '../Homepage/Cart';
import Navbar from '../Homepage/Navbar';


const usernameData = createContext();
const itemsInbasket = createContext();

function LandingPage({ userName, email, handleLogOut }) {
    useEffect(() => {
        alert("This site is still in development!")
    }, [])
    const data = { name: userName, email: email, handleLogOut: handleLogOut };
    const [item, setItems] = useState(0);
    return <BrowserRouter>
        <itemsInbasket.Provider value={{ item: item, setItems: setItems }}>
            <usernameData.Provider value={data}>
                <Navbar />
                <Route exact path="/"> <Homepage /></Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
            </usernameData.Provider>
        </itemsInbasket.Provider>
    </BrowserRouter>
};

export { usernameData, itemsInbasket }
export default LandingPage

