import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import "../Styles/global.css";
import { getBlog, getCategories, getLatestBlog } from '../Functions/functions';
import Header from './Header';
import Footer from './Footer';


export default function BlogDetails() {
    const param = useParams();
    const [blog, setBlog] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const blog = await getBlog(param.slug);
            const categories = await getCategories();
            if (blog != null) {
                setBlog(blog);
                setLoaded(true);
            }
            if (categories != null) {
                setCategories(categories);
            }
        }
        fetchData();
    }, []);
    console.log(blog);
    if (blog != null) {
        const { title, content, publishedAt, thumbnail } = blog.attributes;
        const { url } = thumbnail.data.attributes;
        return (
            <>
                <Header />
                <section>
                    <div className="container mt-5 mb-15">
                        <div className="blogs">
                            <div className="row">
                                <div className="col-2" />
                                <div className="col-8">
                                    <div className="blog-img">
                                        <img src={process.env.REACT_APP_API_BASE_URL + url} width="100%" />
                                    </div>
                                    <div className="blog-date">
                                        <p>{moment(publishedAt).format('Do MMMM YYYY')} by <span style={{ color: '#AC2027' }}>admin</span></p>
                                    </div>
                                    <div className="blog-head">
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="blog-details mt-5">
                                        <p>{content}</p>
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
                                                <div className="search-btn d-flex justify-content-end align-items-center">
                                                    <a href="#"><i className="far fa-search" /></a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="categories">
                                        <ul>
                                            <li><b style={{ color: '#171F33' }}>Categories</b></li>
                                            {
                                                categories.length > 0 ?
                                                    categories.map((category) => <li>
                                                        <Link to="/">{category.attributes.name}</Link></li>) :
                                                    ""
                                            }
                                        </ul>
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
    return "";

}
