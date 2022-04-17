import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
    const [ showMediaIcons, SetshowMediaIcons ]= useState(false);
    const showNav = props.showNav;
  return (
    <header>

        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <Link to="/"><img src="images/Home/dgtglogo.png" width="84px" height="46px" alt='' /></Link>
                </div>
                {showNav?
                <div className={showMediaIcons ? "menu menu-mobile-view" : "menu"}>
                    <ul className="menu-list">
                        <li>
                            <Link to="/" className="active" >Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/team" >Our Team</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/ourwork">Our Work</Link>
                        </li>
                        <li>
                            <Link to="/career">Career</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contactus" className="active-bg">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                :""}
                <div className="hamberger-menu">
                        <a href='#' onclick={() => SetshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
            </div>

        </div>
    </header>
  )
  
}
