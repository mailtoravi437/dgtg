import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/global.css";
import BlogCard from './BlogCard';
import Header from './Header';


export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ab2eb18c7b36c02c1959eed0dfff654a45ab64daf6d7740a96d9c3bbf863f55c66cf48c6e978445f7f2cc0cb3c0119da3cf1ab4f05b7379659b4ea9b369cad7dba3933bbe900c97353c32ed9a03023ab8d1851f01a6331f424d8efeeef06d673352cc1ff0956fc7fd14f96b99cb46fa0d5ce8ae863422a0e417d6f246060874d',
        }
        async function fetchBlogs() {
            const response = await fetch(process.env.REACT_APP_API_BASE_URL + '/api/blogs?populate=*', { headers });
            const data = await response.json();
            setBlogs(data.data);
            setLoaded(true);
        }
        fetchBlogs();
    }, []);
    blogs.forEach(ele => {
        console.log(ele);
    })
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
                        { }
                        {loaded ? blogs.map(blog => <BlogCard 
                            title={blog.attributes.title}
                            thumbnail={blog.attributes.thumbnail.data.attributes.url}
                            slug={blog.attributes.slug} 
                            />) : 'not loaded'}
                    </div>
                </div>
            </section>
        </>
    )
}
