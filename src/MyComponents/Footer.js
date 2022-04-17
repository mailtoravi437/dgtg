import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaWhatsapp } from "react-icons/gi";

export default function Footer() {
  return (
    <>
      <section style={{ background: '#171F33' }}>
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-heading">
                <h2>DGTG</h2>
              </div>
              <div className="footer-details">
                <p>DGTG is a full service digital marketing agency, started in 2015 we are constantly evolving
                  and adding services in our portfolio.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3" />
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-heading">
                <h3>Company</h3>
              </div>
              <div className="footer-details">
                <ul style={{ paddingLeft: 0 }}>
                  <li><a>About</a></li>
                  <li><a>Services</a></li>
                  <li><a>Our Team</a></li>
                  <li><a>Work</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-heading">
                <h3>Legal</h3>
              </div>
              <div className="footer-details">
                <ul style={{ paddingLeft: 0 }}>
                  <li><a>Privacy policy</a></li>
                  <li><a>Terms of use</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
              <div className="footer-heading">
                <h3>Social</h3>
              </div>
              <div className="footer-details d-flex align-items-center justify-content-between">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
                <a  class="whats-app" href="https://wa.me/+918240627029" target="_blank"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <hr style={{ color: '#FFFFFF', opacity: '0.16' }} />
          <div className="copyright text-center">
            <p style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Copyright 2015-21 © DGTG All Right Reserved</p>
          </div>
        </div>
      </section>


    </>
  )
}
