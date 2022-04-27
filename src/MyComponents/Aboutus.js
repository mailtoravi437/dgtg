import React from 'react';
import Header from './Header';
import "../Styles/global.css";
import "../Styles/aboutus.css"
import Footer from './Footer';


export default function Aboutus() {
  return (
    <>
      <Header showNav={true} showNav1={false}/>
      <section className="mt-15 mb-15">
        <div className="container">
          <div id="features">
            <div className="upper row">
              <div className="upper-left col-sm-12 col-md-6 col-lg-6 mb-5">
                <h1>Our<span style={{ color: '#AC2027' }}> Story </span></h1>
              </div>
              <div className="upper-right col-sm-12 col-md-6 col-lg-6">
                <b style={{ color: '#171F33' }}>Here's a headline we can never forget even if we wanted to: People who work together, succeed.</b>
                <br />
                <br />
                We started out in 2015 as an email marketing agency, and now we do digital and mobile advertising, social media management, affiliate marketing, and even video production and digital media buying. We're also working on building a full-fledged digital media channel of our own.
                <br />
                <br />
                DGTG has always been in a state of transformation to be the one-stop solution. The story is still in the making… Stay tuned!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-15 mb-15">
        <div className="container">
          <div id="features">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="gallery_header">
                  <h2>Our<span style={{ color: '#AC2027' }}> Gallery</span></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-15 mb-15">
        <div className="container gallery-container">
          <div className="gallery-img-container img-60">
            <img className="gallery-img" src="images/aboutus/gallery1.png" />
          </div>
          <div className="gallery-img-container img-40">
            <img className="gallery-img" src="images/aboutus/gallery2.png" />
          </div>
          <div className="gallery-img-container img-50 d-flex flex-wrap">
            <img className="gallery-img img-h-50" src="images/aboutus/gallery9.png" />
            <img className="gallery-img img-50 img-h-50" src="images/aboutus/gallery13.png" />
            <img className="gallery-img img-50 img-h-50" src="images/aboutus/gallery11.png" />
          </div>
          <div className="gallery-img-container img-50">
            <img className="gallery-img" src="images/aboutus/gallery6.png" />
          </div>
          <div className="gallery-img-container img-33">
            <img className="gallery-img" src="images/aboutus/gallery4.png" />
          </div>
          <div className="gallery-img-container img-33">
            <img className="gallery-img" src="images/aboutus/gallery5.png" />
          </div>
          <div className="gallery-img-container img-33">
            <img className="gallery-img img-h-50" src="images/aboutus/gallery8.png" />
            <img className="gallery-img img-h-50" src="images/aboutus/gallery3.png" />
          </div>
          <div className="gallery-img-container img-50">
            <img className="gallery-img" src="images/aboutus/gallery10.png" />
          </div>
          <div className="gallery-img-container img-50">
            <img className="gallery-img img-h-50" src="images/aboutus/gallery7.png" />
            <img className="gallery-img img-h-50" src="images/aboutus/gallery12.png" />
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}
