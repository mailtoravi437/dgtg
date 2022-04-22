import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
    const [ showMediaIcons, SetshowMediaIcons ]= useState(false);
    const showNav = props.showNav??true;
    const isWhite = props.isWhite??false;
  return (
    <header style={{background: isWhite?'#fff':"#171F33"}}>

        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <Link to="/"><img src={isWhite?"images/Home/dgtglogo.png":"images/Home/dgtglogo1.png"} width="84px" height="46px" alt='' /></Link>
                </div>
                {showNav?
                <div className={showMediaIcons ? "menu menu-mobile-view" : "menu"}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" className="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="active">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" className="active">Our Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="active">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ourwork" className="active">Our Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career" className="active">Career</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="active">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus" className="active">Contact Us</NavLink>
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
