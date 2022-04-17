import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/global.css";
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
    <Header/>
      <div>
  <section className="mt-15 mb-15">
    <div className="container">
      <div className="service-header">
        <h1>Services</h1>
        <p>We're a dynamic internet <b>marketing agency</b> that gives you the trust and confidence that you need to grow your company.</p>
      </div>
    </div>        
  </section>
  <section className="mt-15 mb-15">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box p-5 mt-15">
            <div className="box-icon">
              <img src="images/services/performance.png" />
            </div>
            <div className="box-details pt-5">
              <h3>Performance Marketing</h3>
              <p>We are specialized in performance marketing with a bunch of happy advertisers. Whether you need to get leads, sales, downloads, or clicks we got you all covered.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box p-5 mt-15">
            <div className="box-icon">
              <img src="images/services/seo.png" />
            </div>
            <div className="box-details pt-5">
              <h3>SEO &amp; Content Writing</h3>
              <p>Every idea needs to be expressed properly with well-researched content and marketing. We have a team of dedicated writers and SEO specialties for the same.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box p-5 mt-15">
            <div className="box-icon">
              <img src="images/services/social.png" />
            </div>
            <div className="box-details pt-5">
              <h3>Social Media Management</h3>
              <p>Needed analysis and strategy for tailoring your audience and managing the content on your social media account then DGTG got you covered.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box p-5 mt-15">
            <div className="box-icon">
              <img src="images/services/analystics.png" />
            </div>
            <div className="box-details pt-5">
              <h3>Analytics &amp; Consulting</h3>
              <p>With our years of working experience and training, we know how things work. We provide our consulting and analysis for you to grow your business.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box p-5 mt-15">
            <div className="box-icon">
              <img src="images/services/influencer.png" />
            </div>
            <div className="box-details pt-5">
              <h3>Influencer Marketing</h3>
              <p>We provide influencer marketing for promoting your product and generating your leads or sales through them. We have various influencers working with us.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="box p-5 mt-15">
            <div className="box-icon">
              <img src="images/services/web.png" />
            </div>
            <div className="box-details pt-5">
              <h3>Web Development/Design</h3>
              <p>We have specialized web developers and designers to convert your idea to reality. We are specialized in e-commerce, Wordpress, and custom website development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section style={{background: '#F9FAFD'}}>
    <div className="container p-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="letsgo d-flex">
            <img src="images/services/letsgo.png" height="80vh" width="80vh" />
            <h2>Let's get started working together.</h2>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="contactus d-flex justify-content-end align-items-center">
          <Link to="/contactus" ><h4>Contact us<i className="fal fa-long-arrow-right" style={{color: '#AC2027'}} /></h4></Link>
          </div>
        </div> 
      </div>
    </div>
  </section>
</div>

      <Footer/>
    </>
  );
}
