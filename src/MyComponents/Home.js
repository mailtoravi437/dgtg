import React from 'react'
import Footer from './Footer'
import Header from './Header'


export default function Home() {
  return (
    <>
      <Header />
      <div>
        <section style={{ marginTop: '20vh' }}>
          <div className="container mb-15">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="head">
                  <h1>Transform your <span style={{ color: '#AC2027' }}> Brand. </span></h1>
                  <h3>We're a <b>digital marketing agency</b> that helps businesses to get found, get talked about, and grow to the next level! </h3>
                  <div className="head-nxt">
                    <p>We do it all <i className="fal fa-long-arrow-right" /></p>
                    <p style={{ color: '#AC2027' }}>Let’s get started <i className="fal fa-long-arrow-right" /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="head-img">
                  <img src="images/Home/home.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: '#F9FAFD' }}>
          <div className="container">
            <div className="home">
              <div className="row pt-5 mb-5">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="home1">
                    <h2>Why <span style={{ color: '#AC2027' }}>Choose</span> us?</h2>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center p-5">
                  <div className="home2">
                    <p>Choosing us, you would be choosing the best <b>Digital Marketing Agency in India.</b> We’re a creative agency and technology solutions partner, with over <b>200+</b> clients in the last 6 years. </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                  <div className="home3 p-5">
                    <p>We create media buying strategies &amp; <b>campaign management in digital marketing</b> from the concept stage to the actual execution on multiple devices worldwide in the digital sphere. </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 p-3" style={{ background: '#171F33' }}>
                  <div className="home4">
                    <img src="images/Home/client.png" height="48px" width="48px" />
                    <p>200+ Clients served in last 6 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-15 mb-15">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="home5 p-5">
                  <img src="images/Home/dgtg.png" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                <div className="home6 m-2">
                  <h2>We’re <span style={{ color: '#AC2027' }}>DGTG</span></h2>
                  <p><b>A digital marketing agency</b> with a wide reach across India. Our in-house performance network &amp; media buying team works to achieve our client’s <b>150%</b> ROI. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: '#192238' }}>
          <div className="container p-5">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="letsgo d-flex">
                  <img src="images/services/letsgo.png" height="80vh" width="80vh" />
                  <h2 style={{ color: '#FFFFFF' }}>Let's get started working together.</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="contactus d-flex justify-content-end align-items-center">
                  <h4 style={{ color: '#FFFFFF' }}>Contact us<i className="fal fa-long-arrow-right" /></h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-15 mb-15">
            <div className="latest-post text-center">
              <img src="images/Home/live.png" width="116px" height="46px" />
              <h2>Latest Post</h2>
              <p>Visit this space to read the latest posts from our team. We‘ll share our reflections on startups, traveling, recent insights on marketing &amp; growth, artificial intelligence (AI), virtual reality (VR), Internet of things (IoT) with some recent topics on COVID &amp; Lockdown. </p>
            </div>
            <div className="row mt-15">
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="post-img">
                  <img src="images/Home/post1.png" />
                </div>
                <div className="post-deatails mt-4">
                  <p style={{ color: '#171F33' }}>4 Crucial Financial Metrics That Every Startup Must Address</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="post-img">
                  <img src="images/Home/post2.png" />
                </div>
                <div className="post-deatails mt-4">
                  <p style={{ color: '#171F33' }}>Top 10 Android Apps You Must Download In 2019</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="post-img">
                  <img src="images/Home/post3.png" />
                </div>
                <div className="post-deatails mt-4">
                  <p style={{ color: '#171F33' }}>8 Best Practices for Email Marketing in 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


      <Footer />
    </>
  )
}
