import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { usernameData, itemsInbasket } from '../LandingPage/LandingPage'
import PersonIcon from '@material-ui/icons/Person';
import './Navbar.css';



function Navbar(props) {

    const data = useContext(usernameData);
    const items = useContext(itemsInbasket);

    return (<>
        <div id="navbar">
            <Button style={{ textTransform: "none" }}><p>Categories</p></Button>
            <h2 id="heading">Pumpkin Spice</h2>
            <nav >
                <ul id="userinfo">
                    <li id="name"><Button style={{ textTransform: "none" }}>{data.name}<PersonIcon /></Button></li>
                    <li><Button style={{ textTransform: "none" }}><NavLink exact style={{ textDecoration: 'none', color: "#304b0e" }} to="cart">Cart({items.item})</NavLink></Button></li>
                    <li><Button onClick={data.handleLogOut} >Log Out</Button></li>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Navbar
