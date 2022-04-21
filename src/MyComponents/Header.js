import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
    const [ showMediaIcons, SetshowMediaIcons ]= useState(false);
    const showNav = props.showNav??true;
  return (
    <header style={{background: '#171F33'}}>

        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <Link to="/"><img src="images/Home/dgtglogo1.png" width="84px" height="46px" alt='' /></Link>
                </div>
                {showNav?
                <div className={showMediaIcons ? "menu menu-mobile-view" : "menu"}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" ClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" ClassName="active">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" ClassName="active">Our Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" ClassName="active">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ourwork" ClassName="active">Our Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career" ClassName="active">Career</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" ClassName="active">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus" ClassName="active">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                :""}
                <div className="hamberger-menu">
                        <a href='#' onClick={() => SetshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                </div>
            </div>

        </div>
    </header>
  )
  
}
