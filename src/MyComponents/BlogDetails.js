import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/global.css";
import Header from './Header';


export default function BlogDetails() {
    const param = useParams();
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ab2eb18c7b36c02c1959eed0dfff654a45ab64daf6d7740a96d9c3bbf863f55c66cf48c6e978445f7f2cc0cb3c0119da3cf1ab4f05b7379659b4ea9b369cad7dba3933bbe900c97353c32ed9a03023ab8d1851f01a6331f424d8efeeef06d673352cc1ff0956fc7fd14f96b99cb46fa0d5ce8ae863422a0e417d6f246060874d',
        }
        async function getBlog(){
            let response = await fetch(process.env.REACT_APP_API_BASE_URL+`/api/blogs?filters[slug]=${param.slug}&populate=*`, {headers});
            let data = await response.json();
            if(data.data.length > 0){
                setBlog(data.data[0]);
            }
        }
        getBlog();
    }, []);
    if(blog!=null){
        const { title, content, publishedAt, thumbnail } = blog.attributes;
        const { url } = thumbnail.data.attributes;
        console.log(thumbnail);
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
                                        <img src={process.env.REACT_APP_API_BASE_URL+url} />
                                    </div>
                                    <div className="blog-date">
                                        <p>{publishedAt} <span style={{ color: '#AC2027' }}>admin</span></p>
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
    return "";
    
}
