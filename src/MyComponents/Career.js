import React from 'react'
import Header from './Header';
import "../Styles/global.css";
import Footer from './Footer';


export default function Career() {
    return (
        <>
            <Header isWhite={true} />
            <section>
                <div className="container mb-15">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="images/career.png" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            {/* <i className="fal fa-long-arrow-left" /> */}
                            <div className="career">
                                <h2>Career</h2>
                                <p>Join us today!
                                    <br />
                                    <br />
                                    and be a part of India's fastest-growing creative advertising agency. Do you have the skills? We are waiting to hear from you.
                                </p>
                            </div>
                            <div className="message">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="message-details mt-5 mb-4">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-6"><div className="message-details mt-5 mb-4">
                                        <input type="email" placeholder="Email" />
                                    </div></div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="message-text">
                                            <input type="text" placeholder="Subject" className="mb-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="message-text">
                                            <textarea placeholder="Message" defaultValue={""} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="send mt-3">
                                            Send
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
