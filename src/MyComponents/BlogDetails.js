import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import "../Styles/global.css";
import { getBlog, getBlogsByCategory, getCategories, getLatestBlog } from '../Functions/functions';
import Header from './Header';
import Footer from './Footer';
import BlogCard from './BlogCard';


export default function BlogDetails() {
    const param = useParams();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        async function fetchData() {
            const blog = await getBlog(param.slug);
            
            const categories = await getCategories();
            if (blog != null) {
                setBlog(blog);
                setLoaded(true);
                const category = blog.attributes.categories.data[0].attributes.name;
                const relatedBlogs = await getBlogsByCategory(category);
            }
            if (categories != null) {
                setCategories(categories);
            }
            if (relatedBlogs != null) {
                setRelatedBlogs(relatedBlogs);
            }
        }
        fetchData();
    }, []);

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
                                <div className="col-md-2 col-sm-12 order-md-1 order-3" />
                                <div className="col-md-8 col-sm-12 order-md-2 order-2">
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
                                        {
                                            relatedBlogs.length > 0 ?
                                                relatedBlogs.map((blog, index) => {
                                                    return <div className="col-md-6 col-sm-12">
                                                        <BlogCard
                                                            title={blog.attributes.title}
                                                            thumbnail={blog.attributes.thumbnail.data.attributes.url}
                                                            slug={blog.attributes.slug}
                                                        />
                                                    </div>

                                                }) : "No Related Blogs Found"
                                        }

                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-12 order-md-3 order-1">
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
                                                    categories.map((category, index) => <li key={index}>
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
