import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({title, thumbnail, slug}) {
    return (
        <div className="col-12">
            <div className="post-img">
                <img src={process.env.REACT_APP_API_BASE_URL+thumbnail} />
            </div>
            <div className="post-deatails mt-4">
                <Link to={'/blog/'+slug} >
                    <p style={{ color: '#171F33' }}>{title}</p></Link>
            </div>
        </div>
    )
}
