import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header>

        <div className="container">
            <div className="navbar">
                <div className="logo">
                   <Link to="/"><img src="images/Home/dgtglogo.png" width="84px" height="46px" alt='' /></Link>
                </div>
                <div className="toggle" onclick="togglemenu();"></div>
                <ul className="menu">
                    <li>
                        <Link to="/" className="active" onclick="togglemenu();">Home</Link>
                    </li>
                    <li>
                        <Link to="/services" onclick="togglemenu();">Services</Link>
                    </li>
                    <li>
                        <Link to="/team" onclick="togglemenu();">Our Team</Link>
                    </li>
                    <li>
                        <Link to="/about" onclick="togglemenu();">About Us</Link>
                    </li>
                    <li>
                        <Link to="/ourwork" onclick="togglemenu();">Our Work</Link>
                    </li>
                    <li>
                        <Link to="/career" onclick="togglemenu();">Career</Link>
                    </li>

                    <li>
                        <Link to="/blog" onclick="togglemenu();">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contactus" className="active-bg" onclick="togglemenu();">Contact Us</Link>
                    </li>
                </ul>
            </div>

        </div>
    </header>
  )
  
}
