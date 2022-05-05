import React from 'react'
import Header from './Header';
import "../Styles/global.css";
import Footer from './Footer';


export default function Career() {
    return (
        <>
            <Header isWhite={true} showNav={false} showNav1={true} />
            <section>
                <div className="container mb-15">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="images/career.png" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <form action="" className='contact-us--form'>
                                {/* <i className="fal fa-long-arrow-left" /> */}
                                <div className="career">
                                    <h2>Career</h2>
                                    <p>Join us today! and be a part of India's fastest-growing creative advertising agency. Do you have the skills? We are waiting to hear from you.
                                    </p>
                                </div>
                                <div className="message">
                                    <div className="message-details message-details1 mt-5 mb-4">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                            <input type="text" placeholder="Name" className="mb-4"  style={{ border: '1px solid rgba(99, 102, 111, 0.2)', color: 'rgba(99, 102, 111, 0.6)' }}/>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                            <input type="email" placeholder="Email" className="mb-4"  style={{ border: '1px solid rgba(99, 102, 111, 0.2)', color: 'rgba(99, 102, 111, 0.6)' }}/>
                                            </div>
                                            <div className="col-md-12">
                                            <input type="text" placeholder="Subject" className="mb-4" style={{ width: '100%', border: '1px solid rgba(99, 102, 111, 0.2)', color: 'rgba(99, 102, 111, 0.6)' }}/>
                                            </div>
                                            <div className="col-md-12">
                                            <textarea placeholder="Message" defaultValue={""}  style={{ border: '1px solid rgba(99, 102, 111, 0.2)', color: 'rgba(99, 102, 111, 0.6)' }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="send mt-3">
                                        Send
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
