// import logo from './logo.svg';
import { Component } from 'react';
import './App.css'

import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';

import Aboutus from './MyComponents/Aboutus';
import Home from './MyComponents/Home';
import Services from './MyComponents/Services';
import Career  from './MyComponents/Career';
import OurWork from './MyComponents/OurWork';
import Blog from './MyComponents/Blog';
import './Styles/global.css'
import ContactUs from './MyComponents/ContactUs';
import OurTeam from './MyComponents/OurTeam';
import BlogDetails from './MyComponents/BlogDetails';


// library.add(fab);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/team" element={<OurTeam/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/ourwork" element={<OurWork/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<BlogDetails/>}/>
      </Routes>
    </Router>
  );
}



export default App;