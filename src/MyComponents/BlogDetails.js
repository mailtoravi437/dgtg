import React from 'react';
import "../Styles/global.css";
import Header from './Header';


export default function BlogDetails() {
    return (
        <>
            <Header/>
            <section>
                <div className="container mt-5 mb-15">
                    <div className="blogs">
                        <div className="row">
                            <div className="col-2" />
                            <div className="col-8">
                                <div className="blog-img">
                                    <img src="images/blogs/blog1dtails.png" />
                                </div>
                                <div className="blog-date">
                                    <p>12 January, 2022 by <span style={{ color: '#AC2027' }}>admin</span></p>
                                </div>
                                <div className="blog-head">
                                    <h2>4 Crucial Financial Metrics That Every Startup Must Address</h2>
                                </div>
                                <div className="blog-details mt-5">
                                    <p>“29% of startups collapse because they eventually move out of money.” Many entrepreneurs are remarkably proficient and acquainted concerning the most reliable approach to create their product, as well as discover and preserve relevant clients in
                                        the primary stage. Though, what growing entrepreneurs manage to face at the offset, is whence to carry their startup to the succeeding level. This is often due to the necessity of well-thought-of business design.
                                        <br />
                                        <br />
                                        Tracing critical business metrics by inventing the most high-grade control of information is important for mapping results and break different gates of opportunities for your startup. Take a glance at the 4 key financial metrics that should be tracked regularly for every startup owner</p>
                                </div>
                                <div className="nxt-blog mt-5">
                                    <h2>Also <span style={{ color: '#AC2027' }}>Read</span></h2>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="post-img">
                                            <img src="images/blogs/blog8.png" />
                                        </div>
                                        <div className="post-deatails mt-4">
                                            <p style={{ color: '#171F33' }}>Top 10 Android Apps You Must Download In 2019</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="post-img">
                                            <img src="images/blogs/blog9.png" />
                                        </div>
                                        <div className="post-deatails mt-4">
                                            <p style={{ color: '#171F33' }}>8 Best Practices for Email Marketing in 2019</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="post-img">
                                            <img src="images/blogs/blog4.png" />
                                        </div>
                                        <div className="post-deatails mt-4">
                                            <p style={{ color: '#171F33' }}>4 Crucial Financial Metrics That Every Startup Must Address</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="post-img">
                                            <img src="images/blogs/blog5.png" />
                                        </div>
                                        <div className="post-deatails mt-4">
                                            <p style={{ color: '#171F33' }}>Top 10 Android Apps You Must Download In 2019</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="search">
                                    <div className="search-box">
                                        <div className="search-txt d-flex justify-content-start align-items-center">
                                            <input type="text" placeholder="Search" />
                                        </div>
                                        <div className="search-btn d-flex justify-content-end align-items-center">
                                            <a href="#"><i className="far fa-search" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="categories">
                                    <ul>
                                        <li><b style={{ color: '#171F33' }}>Categories</b></li>
                                        <li>Advice</li>
                                        <li>Blog</li>
                                        <li>Business</li>
                                        <li>Consulting</li>
                                        <li>Uncategorized</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
