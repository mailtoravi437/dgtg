import React from 'react';
import Header from './Header';
import "../Styles/global.css";


export default function Aboutus() {
  return (
    <div>
      <Header />
      <header>
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
          <div className="container">
            <div className="row">
              <div className="col">
                <img src="images/aboutus/gallery1.png" width="715px" height="415px" />
              </div>
              <div className="col">
                <img src="images/aboutus/gallery2.png" width="505px" height="415px" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <img src="images/aboutus/gallery9.png" width="610px" height="415px" />
                <div className="row mt-4">
                  <div className="col">
                    <img src="images/aboutus/gallery13.png" width="295px" height="415px" />
                  </div>
                  <div className="col">
                    <img src="images/aboutus/gallery11.png" width="295px" height="415px" />
                  </div>
                </div>
              </div>
              <div className="col">
                <img src="images/aboutus/gallery6.png" width="610px" height="850px" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <img src="images/aboutus/gallery4.png" width="505px" height="415px" />
              </div>
              <div className="col">
                <img src="images/aboutus/gallery5.png" width="400px" height="415px" />
              </div>
              <div className="col">
                <img src="images/aboutus/gallery3.png" width="350px" height="198px" className="mb-3" />
                <img src="images/aboutus/gallery8.png" width="350px" height="198px" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <img src="images/aboutus/gallery10.png" width="610px" height="846px" />
              </div>
              <div className="col">
                <img src="images/aboutus/gallery7.png" width="610px" height="415px" />
                <img src="images/aboutus/gallery12.png" width="610px" height="415px" className="mt-3" />
              </div>
            </div>
          </div>
        </section>

      </header></div>

  )
}
