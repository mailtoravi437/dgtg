import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function OurWork() {
  const [category, setCategory] = useState("all");

  const changeCategory = (category) => {
    setCategory(category);
  }
  return (
    <>
    <Header/>
  <div>
  <section className="mt-15 mb-15">
    <div className="container-fluid">
      <div className="service-header">
        <h1>Our <span className='text-red'>Work</span></h1>
      </div>
      <div className="our-work d-flex justify-content-center mt-5">
        <ul>
          <li className={category =="all"?"red":""} onClick={()=> changeCategory("all")}><a>ALL</a></li>
          <li className={category =="Creatives"?"red":""} onClick={() => changeCategory("Creatives")}><a>Creatives</a></li>
          <li className={category =="Performance"?"red":""} onClick={() =>changeCategory("Performance")}><a>Performance</a></li>
          <li className={category =="Branding"?"red":""} onClick={() => changeCategory("Branding")}><a>Branding</a></li>
        </ul>
      </div>
    </div>        
  </section>
  <section className='our-work-icons'>
    <div className="container mb-15">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#modal"><img src="images/ourwork/khatabook.png" width="220px" height="58px" /></a>
          </div>
          <div className="modal" id="modal">
            <div className="modal__content">
              <a href="#" className="modal__close">×</a>
              <div className="modal__heading text-center">
                <img src="images/ourwork/khatabook.png" width="220px" height="58px" />
              </div>
              <p className="modal__paragraph">
                Khatabook was started in 2015 with an objective to offer email Marketing. Our clients wanted to acquire new customers we Pivoted in affiliate marketing. 2016 onwards, most clients Needed us to reach their new customers on mobile app, we Started mobile advertising and media buying.
                <br />
                <br />
                We learned more in media buying and started using self serve platforms to buy media programmatically and served Many clients for Video and Display advertising.
                <br />
                <br />
                In last 2 years we have robust our operations and creative Capabilities and built our own media and production set up.
                <br />
                <br />
                The story is in the making…Stay tuned!
              </p>
            </div>
          </div>
        </div>
        {(category=="all" || category=="Creatives")?
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/housejoy.png" width="220px" height="112px" /></a>
          </div>
        </div>:""}
        {(category=="all" || category=="Performance")?
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/reliance.png" width="220px" height="63px" /></a>
          </div>
        </div>:""}
      </div>
      <div className="row mt-5">
      {(category=="all" || category=="Branding")?
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/swiggy.png" width="220px" height="66px" /></a>
          </div>
        </div>:""}
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/mahindra.png" width="220px" height="124px" /></a>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/ing.png" width="220px" height="55px" /></a>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/banco.png" width="220px" height="122px" /></a>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <div className="icon">
            <a href="#"><img src="images/ourwork/zivame.png" width="220px" height="58px" /></a>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
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
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-end align-items-center">
          <div className="contactus">
          <Link to="/contactus" ><h4>Contact us<i className="fal fa-long-arrow-right" style={{color: '#AC2027'}} /></h4></Link>
          </div>
        </div> 
      </div>
    </div>
  </section>
</div>
<Footer/>

    </>
  )
}
