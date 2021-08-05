import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <ul id="links">
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>FAQ's</li>
            </ul>
            <div id="line"></div>
            <div id="social-links">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
        </footer>
    )
}

export default Footer
