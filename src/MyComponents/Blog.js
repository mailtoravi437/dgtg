import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/global.css";
import Header from './Header';


export default function Blog() {
    return (
        <>
            <Header />
            <section className="mt-15 mb-15">
                <div className="container">
                    <div className="service-header">
                        <img src="images/blogs/dgtglive.png" height="46px" width="116px" />
                        <h1>Latest Post</h1>
                        <p>Visit this space to read the latest posts from our team. We‘ll share our reflections on startups, traveling, recent insights on marketing &amp; growth, artificial intelligence (AI), virtual reality (VR), Internet of things (IoT) with some recent topics on COVID &amp; Lockdown. </p>
                    </div>
                    <div className="search d-flex flex-column justify-content-start align-items-center mt-5">
                        <div className="search-box">
                            <div className="search-txt d-flex justify-content-start align-items-center">
                                <input type="text" placeholder="Search blogs here" />
                            </div>
                            <div className="search-btn d-flex justify-content-end align-items-center">
                                <a href="#"><i className="far fa-search" /></a>
                            </div>
                        </div>
                        <div className="search-list">
                            <ul>
                                <li>Advice</li>
                                <li>Blog</li>
                                <li>Business</li>
                                <li>Consulting</li>
                                <li>Uncategorized</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-15 mb-15">
                    <div className="row mt-15">
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog1.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <Link to='/blog-details' >
                                    <p style={{ color: '#171F33' }}>4 Crucial Financial Metrics That Every Startup Must Address</p></Link>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog2.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>Top 10 Android Apps You Must Download In 2019</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog3.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>8 Best Practices for Email Marketing in 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-15">
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog4.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>4 Crucial Financial Metrics That Every Startup Must Address</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog5.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>Top 10 Android Apps You Must Download In 2019</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog6.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>8 Best Practices for Email Marketing in 2019</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-15">
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog7.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>4 Crucial Financial Metrics That Every Startup Must Address</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog8.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>Top 10 Android Apps You Must Download In 2019</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="post-img">
                                <img src="images/blogs/blog9.png" />
                            </div>
                            <div className="post-deatails mt-4">
                                <p style={{ color: '#171F33' }}>8 Best Practices for Email Marketing in 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}