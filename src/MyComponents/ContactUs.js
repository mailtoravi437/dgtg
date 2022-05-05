import React from 'react'
import Header from './Header';
import "../Styles/global.css";
import Footer from './Footer';
import { Link } from 'react-router-dom'


export default function ContactUs() {
  return (
    <>
      <div className="overlay"></div>
      <Header showNav={false} isWhite={true} showNav1={true} />
      <section className='container mt-3'>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-md-0 mt-5 order-md-1 order-2">
            <div className="place d-flex">
              <img src="images/career/banglore.png" />
              <div className="place-details mt-2">
                <h5>Banglore</h5>
                <p>Building 167, 6th cross, Whitefield,<br /> Bangalore, Karnataka, India-560066</p>
                <p>Building No: 54, The Planet, First Floor.<br />Above First Cry, Brooke Bond First Cross,<br />whitefield Main Road, Whitefield,<br /> Bangalore, Karnataka,India - 560066</p>
              </div>
            </div>
            <div className="place mt-5 d-flex">
              <img src="images/career/delhi.png" />
              <div className="place-details mt-2">
                <h5>Delhi &amp; NCR</h5>
                <p>721,1st Floor Udyog Vihar Phase V,<br />Sector 19, Gurugram, Haryana 122008</p>
              </div>
            </div>
            <div className="place mt-5 d-flex">
              <img src="images/career/mumbai.png" />
              <div className="place-details mt-2">
                <h5>Mumbai</h5>
                <p>WeWork, Spectrum towers, 5th floor,<br />307, Chincholi Bunder Rd, Rajan Pada, <br />Mindspace, Malad West, Mumbai,<br /> Maharashtra 400064</p>
              </div>
            </div>
            <div className="contact-details d-md-flex d-none mt-5 mb-15" style={{ paddingLeft: '25px' }}>
              <div className="tel d-flex justify-content-center align-items-baseline" style={{ paddingRight: '80px' }}>
                <i className="fas fa-phone-alt" /><p>+91 76763 69557</p>
              </div>
              <div className="email d-flex justify-content-center align-items-baseline">
                <i className="fas fa-envelope" /><p>contact@dgtg.in</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 order-md-2 order-1" style={{ zIndex: 15, height: '650px' }}>
            <form action="" className='contact-us--form'>
              <Link to="/"><i className="fal fa-long-arrow-left" style={{ color: '#ffffff' }} /></Link>
              <div className="career">
                <h2 style={{ color: '#ffffff' }}>Contact us</h2>
              </div>
              <div className="message">
                <div className="message-details mt-3 mb-4">
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input type="text" placeholder="Name" className="mb-4" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input type="email" placeholder="Email" className="mb-4" />
                    </div>
                    <div className="col-md-12">
                      <input type="text" placeholder="Subject" className="mb-4" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-12">
                      <textarea placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                </div>

              </div>
              <div className="send mt-3">
                Send
              </div>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
