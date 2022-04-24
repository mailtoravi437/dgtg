import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Link } from 'react-router-dom'
import { getLatestBlog } from '../Functions/functions'
import BlogCard from './BlogCard'
import Carosoul from './Carosoul'
import BlogCarousel from './BlogCarousel'

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function getPosts() {
      let response = await getLatestBlog();
      setBlogs(response);
    }
    getPosts();
  }, [])
  return (
    <>
      <Header />
      <div>
        <section className='home-header'>
          <div className="container mb-15">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 order-md-1 order-2">
                <div className="head">
                  <h1 className='section-heading'>Transform your <span style={{ color: '#AC2027' }}> Brand. </span></h1>
                  <h3 className="py-5 text-sm-center">We're a digital marketing agency that helps businesses to get found, get talked about, and grow to the next level! </h3>
                  <div className="head-nxt">
                    <button className='btn' style={{ background: '#AC2027', color: '#FFFFFF' }}>We do it all</button>
                    <button className='btn' style={{ border: '1px solid' }}>Let’s get started</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 order-md-2 order-1">
                <div className="head-img">
                  <img src="images/Home/home.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
        </section>
        <section style={{ background: '#F9FAFD' }}>
          <div className="container">
            <div className="home">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="home1" style={{ padding: '100px 130px 100px 0px' }}>
                    <h2 className="pt-5 pt-md-0 pt-l-0">Why <br /> <span style={{ color: '#AC2027' }}>Choose</span> us?</h2>
                    <p>Choosing us, you would be choosing the best Digital Marketing Agency in India. We’re a creative agency and technology solutions partner, with over 200+ clients in the last 6 years. </p>
                    <p>We create media buying strategies &amp; campaign management in digital marketing from the concept stage to the actual execution on multiple devices worldwide in the digital sphere. </p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6  background-overflow" style={{ background: '#171F33' }}>
                  <Carosoul/>
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
                  <p>A digital marketing agency with a wide reach across India. Our in-house performance network &amp; media buying team works to achieve our client’s 150% ROI. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: '#192238' }}>
          <div className="container p-l-5 p-md-5 p-0">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="letsgo d-flex">
                  <img src="images/services/letsgo.png"/>
                  <h2 style={{ color: '#FFFFFF' }}>Let's get started<br/>working together.</h2>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-lg-end justify-content-md-end justify-content-center   align-items-center">
                <div className="contactus">
                  <Link to="/contactus" ><h4 style={{ background: '#AC2027', color: '#FFFFFF' }}>Contact us</h4></Link>
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
              {blogs.length > 0 ? <BlogCarousel blogList={blogs} />: "" }
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
