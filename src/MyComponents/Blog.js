import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategories, getLatestBlog, getBlogsByCategory } from '../Functions/functions';
import "../Styles/global.css";
import BlogCard from './BlogCard';
import Header from './Header';
import Footer from './Footer';


export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [activeCategory , setActiveCategory] = useState(null);
    useEffect(() => {
        async function fetchBlogs() {
           const response = await getLatestBlog();
           const categories = await getCategories();
           if(response != null){
               setBlogs(response);
               setLoaded(true);
           }
           if(categories != null){
               setCategories(categories);
           }
        }
        fetchBlogs();
    }, []);
    const getByCategory = async (category) =>{
        setActiveCategory(category);
        console.log(category);
        const blogs = await getBlogsByCategory(category);
        if(blogs != null){
            setBlogs(blogs);
        }else{
            setBlogs([]);
        }

    }
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
                                {
                                    categories.length > 0 ?
                                    categories.map((category)=><li style={{cursor:"pointer"}} onClick={() => getByCategory(category.attributes.name)}>{category.attributes.name}</li>):
                                    ""
                                }
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
            <Footer/>
        </>
    )
}
