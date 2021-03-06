import React, { useState } from 'react'
import { Link,NavLink, useParams } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
    const [ showMediaIcons, SetshowMediaIcons ]= useState(false);
    const showNav = props.showNav??true;
    const showNav1 = props.showNav1??true;
    const isWhite = props.isWhite??false;
  return (
    <header style={{background: isWhite?'#fff':"#171F33"}}>

        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <Link to="/"><img src={isWhite?"/images/Home/dgtglogo.png":"/images/Home/dgtglogo1.png"} width="84px" height="46px" alt='' /></Link>
                </div>
                {showNav?
                <div className={showMediaIcons ? "menu menu-mobile-view" : "menu"}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" className="">Our Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ourwork" className="">Our Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career" className="">Career</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus" className="active">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                :""}

                {showNav1?
                <div className={showMediaIcons ? "menu1 menu-mobile-view1" : "menu1"}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team" className="">Our Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ourwork" className="">Our Work</NavLink>
                        </li>
                        <li>
                            <NavLink to="/career" className="">Career</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus" className="active">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                :""}

                <div className="hamberger-menu">
                        <a style={{color: isWhite?'#111':"#fff"}} href='#' onClick={() => SetshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                </div>
            </div>

        </div>
    </header>
  )
  
}
