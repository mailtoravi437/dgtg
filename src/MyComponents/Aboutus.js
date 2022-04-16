import React from 'react';
import Header from './Header';
import "../Styles/global.css";


export default function Aboutus() {
    return (
     <div>
       <Header/>
  <header>
    <section className="mt-15 mb-15">
      <div className="container">
        <div id="features">
          <div className="upper row">
            <div className="upper-left col-lg-6">
              <h1>Our<span style={{color: '#AC2027'}}> Story</span></h1>
            </div>
            <div className="upper-right col-lg-6">
              <p style={{color: '#171F33'}}>
                Here's a headline we can never forget even if we wanted to: People who work together, succeed.</p><br />
              <p>
                We started out in 2015 as an email marketing agency, and now we do digital and mobile advertising, social media management, affiliate marketing, and even video production and digital media buying. We're also working on building a full-fledged digital media channel of our own.</p><br />
              <p>
                DGTG has always been in a state of transformation to be the one-stop solution. The story is still in the making… Stay tuned!</p><br />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mt-15 mb-15">
      <div className="container">
        <div id="features">
          <div className="upper row">
            <div className="upper-left col-lg-6">
              <div className="gallery_header">
                <h2 style={{fontSize: 48}}>Our<span style={{color: '#AC2027'}}> Gallery</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
  <div className="container">
    <div className="row">
      <div className="col">
        <img src="images/aboutus/gallery1.png" />
      </div>
      <div className="col">
        <img src="images/aboutus/gallery2.png" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src="images/aboutus/gallery9.png" />
        <div className="row mt-4">
          <div className="col">
            <img src="images/aboutus/gallery13.png" />   
          </div>
          <div className="col">
            <img src="images/aboutus/gallery11.png" />   
          </div>
        </div>
      </div>
      <div className="col">
        <img src="images/aboutus/gallery6.png" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src="images/aboutus/gallery4.png" />
      </div>
      <div className="col">
        <img src="images/aboutus/gallery5.png" />
      </div>
      <div className="col">
        <img src="images/aboutus/gallery3.png" />
        <img src="images/aboutus/gallery8.png" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <img src="images/aboutus/gallery10.png" />
      </div>
      <div className="col">
        <img src="images/aboutus/gallery7.png" />
        <img src="images/aboutus/gallery12.png" className="mt-3" />
      </div>
    </div>
  </div>
</section>

  </header></div>

)
}
